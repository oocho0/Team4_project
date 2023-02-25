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


f = open("/Users/juheekim/Desktop/coding/mycodesource/Multicampus/4조/mine/자연어처리/naverCafe_애견카페.csv", 'w', newline='')
#f = open("/Users/juheekim/Desktop/coding/mycodesource/Multicampus/4조/mine/자연어처리/naverCafe_애견카페.csv", 'a', newline='')
new_csv = csv.writer(f)
#new_csv.writerow(['제목','글','댓글'])

options = webdriver.ChromeOptions()
options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
driver = webdriver.Chrome(executable_path='chromedriver', options=options)
time.sleep(3)

#검색할 키워드
keyword = ["애견카페"]

cafeHome = driver.find_element(By.CSS_SELECTOR, ".input_text")
cafeHome.send_keys(keyword)
time.sleep(3)
cafeHome.send_keys(Keys.ENTER)
time.sleep(2)

entireLetter=driver.find_element(By.CSS_SELECTOR,".section_search_tab:nth-child(3)")
entireLetter.click()
aYear=driver.find_element(By.CSS_SELECTOR,"#mainContainer > div > div.SectionSearchContent > div.section_search_content > div > div.FilterListArea > div.FilterList.FilterPeriodList > ul > li:nth-child(7) > div > label")
aYear.click()


#결과 페이지 for문
for j in range(1,13):

    csv_row = []

    aLetter=driver.find_element(By.CSS_SELECTOR,"#mainContainer > div > div.SectionSearchContent > div.section_search_content > div > div.article_list_area > ul > li:nth-child("+str(j)+") > div > div > div > a")
    
    aLetter.click()
    time.sleep(2)

    #새창으로 이동
    driver.switch_to.window(driver.window_handles[-1])
    time.sleep(4)

    #cafe Iframe으로 이동
    driver.switch_to.frame("cafe_main")

    #글제목, 글, 댓글 가져오기
    if check_exists_by_css_selector(".title_text"):
        title = driver.find_element(By.CSS_SELECTOR, ".title_text").text
        csv_row.append(title)
    else:
        title=[0]
        csv_row.append(title)
    if check_exists_by_css_selector(".se-main-container"):
        text = driver.find_element(By.CSS_SELECTOR,".se-main-container").text
        csv_row.append(text)
    else:
        text=[0]
        csv_row.append(text)
    if check_exists_by_css_selector(".CommentBox"):
        comment=driver.find_element(By.CSS_SELECTOR,".CommentBox > ul > li").text
        csv_row.append(comment)
    else:
        comment=[0]
        csv_row.append(comment)
    print(csv_row)
    new_csv.writerow(csv_row)

    #원frame으로 복귀
    driver.switch_to.default_content()
    driver.close()

    #본창으로 복귀
    driver.switch_to.window(driver.window_handles[0])
    time.sleep(2)

n = 1
m = 2
#2페이지부터 끝까지 
while True:
    if n <= 1000:
        m += 1
        if check_exists_by_css_selector("#mainContainer > div > div.SectionSearchContent > div.section_search_content > div > div.article_list_area > div > div > div > a:nth-child("+str(m)+")"):

            nextPage2=driver.find_element(By.CSS_SELECTOR,"#mainContainer > div > div.SectionSearchContent > div.section_search_content > div > div.article_list_area > div > div > div > a:nth-child("+str(m)+")")
            nextPage2.click()
            time.sleep(3)
            
            for j in range(1,13):

                csv_row = []

                aLetter=driver.find_element(By.CSS_SELECTOR,"#mainContainer > div > div.SectionSearchContent > div.section_search_content > div > div.article_list_area > ul > li:nth-child("+str(j)+") > div > div > div > a")
                
                aLetter.click()
                time.sleep(2)

                #새창으로 이동
                driver.switch_to.window(driver.window_handles[-1])
                time.sleep(4)

                #cafe Iframe으로 이동
                driver.switch_to.frame("cafe_main")

                #글제목, 글, 댓글 가져오기
                if check_exists_by_css_selector(".title_text"):
                    title = driver.find_element(By.CSS_SELECTOR, ".title_text").text
                    csv_row.append(title)
                else:
                    title=[0]
                    csv_row.append(title)
                if check_exists_by_css_selector(".se-main-container"):
                    text = driver.find_element(By.CSS_SELECTOR,".se-main-container").text
                    csv_row.append(text)
                else:
                    text=[0]
                    csv_row.append(text)
                if check_exists_by_css_selector(".CommentBox"):
                    comment=driver.find_element(By.CSS_SELECTOR,".CommentBox > ul > li").text
                    csv_row.append(comment)
                else:
                    comment=[0]
                    csv_row.append(comment)
                print(csv_row)
                new_csv.writerow(csv_row)

                #원frame으로 복귀
                driver.switch_to.default_content()
                driver.close()

                #본창으로 복귀
                driver.switch_to.window(driver.window_handles[0])
                time.sleep(2)
                n+=1

        elif check_exists_by_css_selector("#mainContainer > div > div.SectionSearchContent > div.section_search_content > div > div.article_list_area > div > div > div > a:nth-child(8)"):
            
            nextPage2=driver.find_element(By.CSS_SELECTOR,"#mainContainer > div > div.SectionSearchContent > div.section_search_content > div > div.article_list_area > div > div > div > a:nth-child(8)")
            nextPage2.click()
            time.sleep(3)
            
            
            for j in range(1,13):

                csv_row = []

                aLetter=driver.find_element(By.CSS_SELECTOR,"#mainContainer > div > div.SectionSearchContent > div.section_search_content > div > div.article_list_area > ul > li:nth-child("+str(j)+") > div > div > div > a")
                
                aLetter.click()
                time.sleep(2)

                #새창으로 이동
                driver.switch_to.window(driver.window_handles[-1])
                time.sleep(4)

                #cafe Iframe으로 이동
                driver.switch_to.frame("cafe_main")

                #글제목, 글, 댓글 가져오기
                if check_exists_by_css_selector(".title_text"):
                    title = driver.find_element(By.CSS_SELECTOR, ".title_text").text
                    csv_row.append(title)
                else:
                    title=[0]
                    csv_row.append(title)
                if check_exists_by_css_selector(".se-main-container"):
                    text = driver.find_element(By.CSS_SELECTOR,".se-main-container").text
                    csv_row.append(text)
                else:
                    text=[0]
                    csv_row.append(text)
                if check_exists_by_css_selector(".CommentBox"):
                    comment=driver.find_element(By.CSS_SELECTOR,".CommentBox > ul > li").text
                    csv_row.append(comment)
                else:
                    comment=[0]
                    csv_row.append(comment)
                print(csv_row)
                new_csv.writerow(csv_row)

                #원frame으로 복귀
                driver.switch_to.default_content()
                driver.close()

                #본창으로 복귀
                driver.switch_to.window(driver.window_handles[0])
                time.sleep(2)
                n+=1

        else :
            break
    else:
        break
