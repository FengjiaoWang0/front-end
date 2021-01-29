'''
@Description: 
@Version: 2.0
@Autor: fengjiao
@Date: 2020-06-29 15:15:31
@LastEditors: fengjiao
@LastEditTime: 2020-06-29 18:13:51
'''

import os
filePath = "/Users/fengjiao/Projects/Web-Develop-Yonah/notes"
pathList = os.listdir(filePath)   # os.listdir(filePath) 会遍历文件夹内的文件并返回一个列表
# print(pathList)

def text_save1(filename, data):#filename为写入CSV文件的路径，data为要写入数据列表.
    file = open(filename,'a')
    print(file.read())
    for i in range(len(data)):
        # s = str(data[i]).replace('[','').replace(']','')#去除[],这两行按数据不同，可以选择
        # s = s.replace("'",'').replace(',','') +'\n'   #去除单引号，逗号，每行末尾追加换行符
        s = str(data[i])
        file.write(s + "\n")
    file.close()
    print("保存文件成功") 

def text_save(filename, data):#filename为写入CSV文件的路径，data为要写入数据列表.
    file = open(filename,'w')
    for name in data:
        # path = os.path.join(filePath, name)
        # s = str(data[i]).replace('[','').replace(']','')#去除[],这两行按数据不同，可以选择
        # s = s.replace("'",'').replace(',','') +'\n'   #去除单引号，逗号，每行末尾追加换行符
        # with open(path) as f:
        file.write(name + "\n")
    file.close()
    print("保存文件成功") 


print(pathList)
text_save("notes.txt",pathList)


# pathName = []
# for file_name in pathName:
#     # "a"表示以不覆盖的形式写入到文件中,当前文件夹如果没有"save.txt"会自动创建
#     with open("notes.txt","a+") as f:
#         f.write(file_name + "\n")
#         # print(file_name)
#     f.close()





# txtName = "netesList.txt"
# f=open(txtName, "a+")
# dire="../notes"
# #anchor="./netesList" 
# for root ,dirs, files in os.walk(dire):
#     for file_single in files:
#         test = root+'/'+file_single
#         refile = file_single[0:8]
#         #anchort = anchor + refile +'.png'
#         result = test +'\n'
#         #result = test + " " +anchort +'\n'
#         f.write( result)
# f.close()