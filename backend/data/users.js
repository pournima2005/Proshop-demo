import bcrypt from 'bcryptjs';

const users=[
    {
        name:'Admin User',
        email:'admin@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'ragini auti',
        email:'ragini@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },
    {
        name:'akhilesh',
        email:'akhilesh@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },
    {
        name:'raghav',
        email:'raghav@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },

]

export default users;