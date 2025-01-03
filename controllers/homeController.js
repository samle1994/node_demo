const getHomePage = (req,res) => {
    res.send('Home Page')
}

const getTest = (req,res) => {
    res.send('Test')
}
module.exports = {
    getHomePage,
    getTest
}