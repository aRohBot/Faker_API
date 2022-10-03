const faker =require('faker')
const express = require("express")
const app = express()
const PORT = 8000

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.json({ message: "WASSUP" })
})

app.get("/api/users/new", (req, res) => {
    const newUser = createUser()
    res.json(newUser)
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany()
    res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
    const newCompany = createCompany()
    const newUser = createUser()
    const newData ={
        user: newUser,
        company: newCompany
    }
    res.json(newData)
})

const createUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
    })


const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    },
})

// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on PORT: ${PORT}`) )
