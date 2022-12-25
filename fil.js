let students = [
    {nam : "gowsxj",rn :34,marks :80},
    {nam : "goetham",rn :39,marks :20},
    {nam : "tail",rn :44,marks :60},

]

const sum =students.filter((stu) => stu.marks > 40).reduce((ac,cur) => ac+cur.marks,0)

console.log(sum);
