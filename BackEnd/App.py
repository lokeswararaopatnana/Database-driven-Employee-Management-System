# import json
from flask import Flask,jsonify,request
from EmployeeDB import DBdatail
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
db = DBdatail()

@app.route("/")
def welcome():
    return "Welcome to Database-Driven Employeement Management System...!"

@app.post("/employee")
def CreateNewEmployee():
    request_data = request.get_json()
    response = db.add_employee(request_data["EmpId"],request_data["EmpName"],request_data["Desg"],request_data["DeptId"],request_data["DeptName"],request_data["Awards"],request_data["Salary"],request_data["Skills"])
    if response:
        return {"status":"error!","message":"employee alredy exist!"}
    else:
        return jsonify(response,request_data)
        

@app.put("/employee")
def upadateEmployee():
    request_data = request.get_json()
    data = db.promote_employee(request_data["EmpId"],request_data["EmpName"],request_data["Desg"],request_data["DeptId"],request_data["DeptName"],request_data["Awards"],request_data["Salary"],request_data["Skills"])
    if data:
        data = {
            "status":"success!",
            "message":"employee updated successfully!"
        }
        return data
    # return data
    else:
        return jsonify(data)
        
@app.route("/employees",methods = ['GET'])
def show_employees():
    allemployees = []
    res = db.display_employees()
    print(len(res),res)
    for i in range(len(res)):
        data = {
            "EmpId":res[i][0],
            "EmpName": res[i][1],
            "Desg": res[i][2],
            "DeptId": res[i][3],
            "DeptName": res[i][4],
            "Awards": res[i][5],
            "Salary":res[i][6],
            "Skills":res[i][7]
        }
        allemployees.append(data)
    return jsonify(allemployees)

@app.route("/employee/<EmpId>",methods = ['GET'])
def show_one_employee(EmpId):
    res = db.display_employee(EmpId)
    print("From api",res)
    if res:
        data = {
        "status": "success",
        "eid":res[0],
        "ename": res[1],
        "desg": res[2],
        "did": res[3],
        "dname": res[4],
        "awards": res[5],
        "salary": res[6],
        "skills": res[7]
       }


        return jsonify(data)
    else:
        data = {
            "data":"data not found!",
            "status":"Status Error!"
        }
        return jsonify(data)

@app.route("/employee/<EmployeeId>",methods = ['DELETE'])
def delete_employee(EmployeeId):
    data = db.remove_employee(EmployeeId)
    print(data)
    if data:
        data = {
            "data":"data deleted successfully!",
            "status":"success!"
        }
        return data
    # else:
    #     data = {
    #         "status":"Error!",
    #         "message":"No EmployeeId in data!"
    #     }
    #     return data

@app.route("/employees/<DeptName>",methods = ['GET'])
def show_one_departmentname(DeptName):
    data = db.display_departmentname(DeptName)
    if data:
        data = {
        "status": "success",
        "eid":data[0],
        "ename": data[1],
        "desg": data[2],
        "did": data[3],
        "dname": data[4],
        "awards": data[5],
        "salary": data[6],
        "skills": data[7]
       }


        return jsonify(data)
    else:
        data = {
            "data":"data not found please enter correct departmentname!",
            "status":"Error!"
        }
        return jsonify(data)
if __name__ == "__main__":
    app.run(debug=True)