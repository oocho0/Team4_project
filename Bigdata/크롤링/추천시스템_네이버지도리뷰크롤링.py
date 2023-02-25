import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import pandas as pd
from selenium.common.exceptions import NoSuchElementException
import csv

def check_exists_by_css_selector(css_selector):
    try:
        driver.find_element(By.CSS_SELECTOR, css_selector)
    except NoSuchElementException:
        return False
    return True


options = webdriver.ChromeOptions()
options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
driver = webdriver.Chrome(executable_path='chromedriver', options=options)
time.sleep(3)

comment_text_list = ['음식이 맛있어요', '인테리어가 멋져요', '친절해요', '가성비가 좋아요', '재료가 신선해요', '뷰가 좋아요', '매장이 청결해요', '특별한 날 가기 좋아요',
                     '혼밥하기 좋아요', '특별한 메뉴가 있어요', '단체모임 하기 좋아요', '양이 많아요', '매장이 넓어요', '화장실이 깨끗해요', '주차하기 편해요', '대화하기 좋아요',
                     '오래 머무르기 좋아요', '음악이 좋아요', '술이 다양해요', '차분한 분위기에요', '아늑해요', '고기 질이 좋아요', '사진이 잘 나와요', '혼술하기 좋아요',
                     '음료가 맛있어요', '기본 안주가 좋아요', '빵이 맛있어요', '커피가 맛있어요', '집중하기 좋아요', '좌석이 편해요', '디저트가 맛있어요', '비싼 만큼 가치있어요',
                     '룸이 잘 되어있어요', '반려동물과 가기 좋아요', '현지 맛에 가까워요', '메뉴 구성이 알차요', '야외 공간이 멋져요', '컨셉이 독특해요']
restorant = pd.DataFrame({})

d = pd.read_csv("/Users/juheekim/Desktop/coding/mycodesource/Multicampus/4조/Team4_project/data/애견동반식당.csv")
diner = d['이름']
'''
url = 'https://map.naver.com/v5/?c=15,0,0,0,dh'
driver.get(url)
'''
target = driver.find_element(By.CSS_SELECTOR, "#input_search1673868706459")

f = open("/Users/juheekim/Desktop/coding/mycodesource/Multicampus/4조/Team4_project/data/애견동반식당_new.csv", 'w', newline='')
new_csv = csv.writer(f)

for i in diner:
    print(i)
    csv_row = list()
    csv_row.append(i)

    target.send_keys(i)
    time.sleep(3)

    target.send_keys(Keys.ENTER)
    time.sleep(5)
    if check_exists_by_css_selector("#entryIframe"):
        iframe = driver.find_element(By.CSS_SELECTOR, '#entryIframe')
        driver.switch_to.frame(iframe)
    else:
        iframe = driver.find_element(By.CSS_SELECTOR, '#searchIframe')
        driver.switch_to.frame(iframe)
        key5 = driver.find_element(By.CSS_SELECTOR, ".P7gyV:nth-child(1)")
        key5.click()
        time.sleep(2)
        driver.switch_to.default_content()
        iframe = driver.find_element(By.CSS_SELECTOR, '#entryIframe')
        driver.switch_to.frame(iframe)

    key1 = driver.find_element(By.CSS_SELECTOR, ".flicking-viewport a[href*='review']")
    key1.click()
    time.sleep(3)

    #리뷰 스크롤 늘림
    while check_exists_by_css_selector('.Tvx37'):
        key2 = driver.find_element(By.CSS_SELECTOR, ".Tvx37")
        key2.click()
        time.sleep(2)

    if check_exists_by_css_selector(".place_section_content"):
        cham_people = driver.find_element(By.CSS_SELECTOR, '.BPjKc').text.split('명')[0].replace('(', '') #리뷰자수

        if check_exists_by_css_selector('.SuAGt'):
            count = driver.find_element(By.CSS_SELECTOR, '.m7jAR').text #별점
            count_people = driver.find_element(By.CSS_SELECTOR, '.m7jAR:nth-child(2)').text.split('명')[0].split('(')[1].replace(',', '') #별점자수

        reviews = driver.find_elements(By.CSS_SELECTOR, '.nbD78')

        temp_reviews = list()
        for re in reviews:
            re_dict = dict()
            # 리뷰 코멘트별 별점
            comment_text = re.find_element(By.CSS_SELECTOR, ".nWiXa").text.replace('"', '')  # 코멘트 명
            comment_people_count = re.find_element(By.CSS_SELECTOR, ".TwM9q").text.replace('이 키워드를 선택한 인원\n',
                                                                                           '')  # 코멘트별 인원 수

            re_dict['comment_text'] = comment_text
            re_dict['comment_people_count'] = comment_people_count
            temp_reviews.append(re_dict)

        for col_name in comment_text_list:
            temp_people_count = '0'

            for re in temp_reviews:
                print(col_name)
                print(re['comment_text'])
                print(re['comment_people_count'])

                if col_name == re['comment_text']:
                    temp_people_count = re['comment_people_count']

            csv_row.append(temp_people_count)


        csv_row.append(cham_people) #리뷰자수
        csv_row.append(count) #별점
        csv_row.append(count_people)  #별점자 수

    else:
        pass

    print(csv_row)
    new_csv.writerow(csv_row)

    driver.switch_to.default_content()
    key4 = driver.find_element(By.CSS_SELECTOR, "#container > shrinkable-layout > div > app-base > search-input-box > div > div > button.button_clear.ng-star-inserted")
    key4.click()
    time.sleep(2)

f.close()