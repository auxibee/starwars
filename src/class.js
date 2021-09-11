function CreateStudent(name, age){
    return {
        name ,
        age,
        fullname(){
            return name + 'hello world'
        }
    }
}