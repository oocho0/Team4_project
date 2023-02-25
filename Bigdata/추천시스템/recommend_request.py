from .recommend import recommend

def result_1(request):
    # 사용자가 누른 카테고리를 받아오는 것.
    queryinput = request.GET
    # 사용자 좌표
    user_coordinate= (37.5119303471109, 127.03808107256)
    lat = user_coordinate[0]
    lng = user_coordinate[1]

    if queryinput:
        # 장소 / 애견카페 혹은 애견동반카페
        place = queryinput.get("place")
        # 좋아하는 카테고리
        like = queryinput.get("category")
        # 원하는 거리
        distance = float(queryinput.get("distance"))

        # 추천 시스템 알고리즘 함수 from .recommend import recommend
        context = recommend(place, like, distance, lat, lng)
                        #   장소,  카테고리,  거리, 좌표

    # 사용자가 선택하지 않았을 경우 그냥 위치를 띄워주는 것.
    else:
        imsi = (lat, lng)  # 실시간으로 받아 올 좌표
        x = imsi[0]
        y = imsi[1]
        context = {
            "x": x,
            "y": y
        }

    return render(request, "queryoutput_test_1.html", context)