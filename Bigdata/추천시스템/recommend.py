import pandas as pd
import numpy as np
from haversine import haversine
from math import sin, cos, sqrt, atan2, radians

def recommend(place, like, distance, lat, lng):

    # 애견동반카페
    cafe = pd.read_csv("C:/KMG/DATAexam/융복합/data/cafe_recommend.csv")
    cafe.set_index("name",inplace=True)
    # 애견카페
    dog = pd.read_csv("C:/KMG/DATAexam/융복합/data/dog_recommend.csv")
    dog.set_index("name", inplace=True)
    # 주소 및 좌표 데이터
    addr = pd.read_csv("C:/KMG/DATAexam/융복합/data/mapping_data.csv")
    addr = pd.concat([addr[addr["category"]=="애견동반카페"],addr[addr["category"]=="애견카페"]])
    addr.set_index('name', inplace=True)

    if place == "애견카페":
        rpm = dog
        if like == "1": # 맛있는 것이 최고!
            category = ['desert', 'coffee', 'drink']
        elif like == "2": #사진이 잘나와야지!
            category = ['interior', 'picture', 'toilet']
        elif like == "3": #시설이 좋아야지!
            category = ['animal', 'space', 'clean']
        elif like =="4": # 무엇보다 가격이지!
            category = ['goodprice', 'reasonable', 'kind']
        else:
            category = ['desert', 'coffee', 'drink','interior', 'picture', 'toilet','animal', 'space', 'clean', 'goodprice', 'reasonable', 'kind']

    else:  # 애견동반카페
        rpm = cafe
        if like == "1":
            category = ['coffee', 'drink', 'desert', 'specialmenu']
        elif like == "2":
            category = ['interior', 'view', 'picture']
        elif like == "3":
            category = ['clean', 'toilet', 'seat', 'focus']
        elif like == "4":
            category = ['goodprice', 'talk', 'kind']
        else:
            category = ['coffee', 'drink', 'desert', 'specialmenu','interior', 'view', 'picture','clean', 'toilet', 'seat', 'focus','goodprice', 'talk', 'kind']

    list = pd.DataFrame()
    list.index = rpm.index
    list['result'] = rpm[category].sum(axis=1)
    # 점수가 높은 순으로 정렬
    list.sort_values('result', ascending=False, inplace=True)
    # 점수가 높은 순으로 매장 이름만 뽑아내기.
    result = list.index

    #가장 가까운 매장 찾기
    # result2는 result에서 잡힌 서열을 순서로 사용자가 원하는 거리 안에 있는 것을 순위에 맞춰 짤라내어 저장하고 있음
    result2 = pd.DataFrame()
    imsi = (lat, lng) # 실시간으로 받아 올 좌표
    x = imsi[0] # 내위치
    y = imsi[1]

    print("Result:", distance)
    print("Should be:", dist, "km")
    #result는 사용자가 선택한 카테고리에 맞춰 랭킹을 만든 후 랭킹 순위대로 인덱스를 추출한 결과
    for rank in result:
        #place_data = (addr.loc[rank, "lat"], addr.loc[rank, "lng"])
        #dist = haversine(imsi, place_data, unit='m')

        R = 6373.0 # approximate radius of earth in km
        lat1 = radians(x)  # 사용자 위치
        lon1 = radians(y)
        lat2 = radians(addr.loc[rank, "lat"])  # 매장 위치
        lon2 = radians(addr.loc[rank, "lng"])
        dlon = lon2 - lon1
        dlat = lat2 - lat1
        a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
        c = 2 * atan2(sqrt(a), sqrt(1 - a))
        dist = R * c * 1000

        if dist < distance:
            result2.loc[rank, "address"] = addr.loc[rank, "address"]
            result2.loc[rank, "lat"] = addr.loc[rank, "lat"]
            result2.loc[rank, "lng"] = addr.loc[rank, "lng"]
            result2.loc[rank, "dist"] = dist
        if like != "5": # 최단거리를 출력하는 것이 아니라면, 위에서 순위화 하였으니,
            if len(result2) == 5:
                break
    if like == '5': # 최단거리를 출력하는 거라면
        result2.sort_values('dist', inplace=True)
        result2 = result2.iloc[0:5]

    # 근처에 해당 조건의 매장이 없다면
    if len(result2.index) == 0:
        context = {
            "name": "0",
            "lat": 0,
            "lng" : 0,
            "x" : x,
            "y" : y
        }
        return context
        # 근처에 해당 조건의 매장이 있다면,
    else:
    # 자바스크립트에서 읽힐 수 있게 하기위해 딕셔너리로 변환
        name = np.array(result2.index)
        name_str = '//'.join([str(i) for i in name])
        lat = np.array(result2['lat'])
        lat_str = '//'.join([str(i) for i in lat])
        lng = np.array(result2['lng'])
        lng_str = '//'.join([str(i) for i in lng])

        context = {
            "name": name_str,
            "lat": lat_str,
            "lng" : lng_str,
            "x" : x,
            "y" : y
        }
        return context

    # 추천지역을 선택하지 않아도 현재 내 위치정보는 보여주어야함
