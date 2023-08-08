import("./Server")
    .then(res => new res.Server().bootStart())
    .catch(err => console.error(err))
