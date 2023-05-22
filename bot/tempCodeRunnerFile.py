for i in baseURLWork.json() :
    if i['day'] == daatenow.day+1 :
        massage = '\n' + 'วันพรุ่งนี้คุณมีการบ้านวิชา'+i['namework'] + 'ที่ต้องส่ง' + '\n' + 'เวลา' + str(i['hour']) + ':' + str(i['minute']) + 'นาฬิกานะคะ'
        line.sendtext(massage)
