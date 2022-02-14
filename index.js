const db = require("./db")

const querySelectUsers = async () => {
  const results = await db.selectUsers()
  console.log(results)
}

const querySelectUser = async (id) => {
  const results = await db.selectUser(id)
  console.log(results)
}

const queryInsertUser = async () => {
  const results = await db.insertUser({
    name: "João",
    age: "1992-07-31",
    cpf: "12497654390",
  })

  results.affectedRows
    ? console.log("User inserted")
    : console.log("User not inserted")

  console.log(results)
}

const queryUpdateUser = async (id) => {
  const results = await db.updateUser(id, {
    name: "João Paulo",
    age: "1993-08-25",
    cpf: "9873456789",
  })

  results.affectedRows
    ? console.log("User updated")
    : console.log("User not updated")

  console.log(results)
}

const queryDeleteUser = async (id) => {
  const results = await db.deleteUser(id)

  results.affectedRows
    ? console.log("User deleted")
    : console.log("User not deleted")

  console.log(results)
}

const querys = async () => {
  // await querySelectUsers()
  // await queryInsertUser()
  // await querySelectUsers()
  // await querySelectUser(4)
  // await queryUpdateUser(4)
  // await querySelectUser(4)
  await queryDeleteUser(3)
  await querySelectUsers()
}

querys()
