 # coding:utf-8
from flask import Flask,render_template,request,redirect,url_for
from werkzeug.utils import secure_filename
import os
# from flask import Response, json
from flask import jsonify
 
app = Flask(__name__)
 
@app.route('/upload', methods=['POST', 'GET'])
def upload():
    if request.method == 'POST':
        f = request.files['file']
        basepath = os.path.dirname(__file__)  # 当前文件所在路径
        upload_path = os.path.join(basepath, 'uploads',secure_filename(f.filename))  #注意：没有的文件夹一定要先创建，不然会提示没有该路径
        f.save(upload_path)
        # if upload_path == "":
        #     status="400"
        # else:
        #     status="200"  
        jsondata = {
            'status': "200",
            'url': upload_path
            }
        return jsondata
    # return render_template('upload.html')
    else:
        return "something1234"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')