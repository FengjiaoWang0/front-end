'''
@Description: 
@Version: 2.0
@Autor: fengjiao
@Date: 2019-11-06 16:18:36
LastEditors: fengjiao
LastEditTime: 2020-10-16 23:03:49
'''
import time
import datetime


 # 计算两个日期相差的天数
def calTime(d1, d2):
    date1 = time.strptime(d1, "%Y-%m-%d")
    date2 = time.strptime(d2, "%Y-%m-%d")

    date1 = datetime.datetime(date1[0],date1[1],date1[2])
    date2 = datetime.datetime(date2[0],date2[1],date2[2])

    return date2-date1

# 计算多少天后是几号
def getday(y,m,d,n):
    the_date = datetime.datetime(y,m,d)
    result_date = the_date + datetime.timedelta(days=n)
    d = result_date.strftime('%Y-%m-%d')
    return d



if __name__ == "__main__":
    metData = "2019-03-18"
    # nowDate = "2020-01-12"
    # date = calTime(metData,nowDate)
    # print("after we met %s days" % date)

    data = getday(2019,3,18,666)
    print(data)

    

