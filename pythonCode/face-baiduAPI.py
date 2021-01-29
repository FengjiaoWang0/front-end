# encoding:utf-8
import requests 

# client_id 为官网获取的AK， client_secret 为官网获取的SK
host = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=17709e57dfbc4e7ab8e29c930a54e10d&client_secret=1826cf723d5948e4ad67c09dca37ff80'
response = requests.get(host)
if response:
    print(response.json())
