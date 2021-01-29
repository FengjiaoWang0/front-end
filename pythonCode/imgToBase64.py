
import base64


with open("/Users/fengjiao/Projects/URunMiniProgram/pages/images/comera.jpg", 'rb') as f:
    base64_data = base64.b64encode(f.read())
    s = base64_data.decode()
    print('data:image/jpeg;base64,%s'%s)
