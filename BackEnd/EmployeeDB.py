import mysql.connector as connector

class DBdatail:
    def __init__(self):
        self.con = connector.connect(host = 'localhost',user = 'root',password = '123456',database = 'ddems')
        query = "create table if not exists empdata(EmployeeId int primary key,EmployeeName varchar(250),Designation varchar(250),DepartmentId varchar(8),DepartmentName varchar(250),Awards varchar(4),Salary varchar(20),Skills varchar(250))"
        cur = self.con.cursor()
        cur.execute(query)
        print("Table is Created Successfully!")
    
    def add_employee(self,EmpId,EmpName,Desg,DeptId,DeptName,Awards,Salary,Skills):
        query = "insert into empdata(EmployeeId,EmployeeName,Designation,DepartmentId,DepartmentName,Awards,Salary,Skills) values({},'{}','{}','{}','{}','{}','{}','{}')".format(EmpId,EmpName,Desg,DeptId,DeptName,Awards,Salary,Skills)
        print(query)
        cur = self.con.cursor()
        try:
            cur.execute(query)
        except:
            return cur
        self.con.commit()
        print("Employee Created in Database Successfully!")
    
    def display_employees(self):
        query = "select * from empdata"
        cur = self.con.cursor()
        cur.execute(query)
        res = []
        for row in cur:
            res.append(row)
            print(row)
            print("Employee Id:",row[0])
            print("Employee Name:",row[1])
            print("Designation:",row[2])
            print("Department Id:",row[3])
            print("Department Name:",row[4])
            print("Awards:",row[5])
            print("Salary:",row[6])
            print("Skills:",row[7])
            print()
            print()
        return res

    def display_employee(self,EmpId):
        query = "select * from empdata where EmployeeId = {}".format(EmpId)
        cur = self.con.cursor()
        cur.execute(query)
        for row in cur:
            print(row)
            return row
        return False

    def remove_employee(self,EmployeeId):
        query = "delete from empdata where EmployeeId = {}".format(EmployeeId)
        cur = self.con.cursor()
        cur.execute(query)
        self.con.commit()
        print("Record Deleted Successfully!")
        return True

    def promote_employee(self,EmployeeId,NewName,NewDesg,NewDeptId,NewDeptName,NewAwards,NewSalary,NewSkills):
        query = "update empdata set EmployeeName = '{}',Designation = '{}',DepartmentId = '{}',DepartmentName = '{}',Awards = '{}',Salary = '{}',Skills = '{}' where EmployeeId = {}".format(NewName,NewDesg,NewDeptId,NewDeptName,NewAwards,NewSalary,NewSkills,EmployeeId)
        print(query)
        cur = self.con.cursor()
        cur.execute(query)
        self.con.commit()
        print("Employee is Updated Successfully!")
        return True

    def display_departmentname(self,DeptName):
        query = "select * from empdata where DepartmentName = '{}' ".format(DeptName)
        cur = self.con.cursor()
        cur.execute(query)
        for row in cur:
            print(row)
            return row
        return False
