import pandas as pd
import requests 
from bs4 import BeautifulSoup 
import json


def start_requests(url):
    print(url) 
    r = requests.get(url)
    return r.content

# 第一级 links 
def get_page(text):
    soup = BeautifulSoup(text, 'html.parser')
    links = soup.find_all('a', class_ = 'nrf')
    pages = []
    for link in links:
        url = 'http://wsjsw.qingdao.gov.cn/'+link.get('href')
        pages.append(url)
    return pages

# 第二级 links and get info
def parse_page(text):
    soup = BeautifulSoup(text, 'html.parser')
    mydict = {}
    time = soup.find('div', class_ = 'fbbt-wenz').text.strip()
    if time > '2020-01-21':
        
        mydict['time'] = soup.find('div', class_ = 'fbbt-wenz').text
        mydict['parag'] = soup.find('div', class_ = 'neirong-wz').text
    else:return mydict
    return mydict


def write_json(result):
    s = json.dumps(result, indent = 4, ensure_ascii=False)
    with open('data/bulletin.json', 'w', encoding = 'utf-8') as f:
        f.write(s)
def crawl(url):
    text = start_requests(url)
    pageurls = get_page(text) 
    for pageurl in pageurls: 
        page = start_requests(pageurl)
        mydict = parse_page(page)
        result_list.append(mydict)
def main():
    url = 'http://wsjsw.qingdao.gov.cn/n28356065/n32563060/n32563061/index.html'
    crawl(url)
    for i in range(2, 5):
        url = 'http://wsjsw.qingdao.gov.cn/n28356065/n32563060/n32563061/index_{}.html'.format(i)
        crawl(url)
#         text = start_requests(url)
#         pageurls = get_page(text) 
#         for pageurl in pageurls: # 
#             page = start_requests(pageurl)
#             mydict = parse_page(page)
#             result_list.append(mydict)
    write_json(result_list) 

    
if __name__ == '__main__':
    result_list = []
    main()
    
