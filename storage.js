const fs = require("fs");

const USERS_FILE = "./data/users.json";
const MEMORY_FILE = "./data/memory.json";

function loadUsers() {
    return JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
}

function saveUsers(users) {
    fs.writeFileSync(
        USERS_FILE,
        JSON.stringify(users, null, 2)
    );
}

function loadMemory() {
    return JSON.parse(fs.readFileSync(MEMORY_FILE, "utf8"));
}

function saveMemory(memory) {
    fs.writeFileSync(
        MEMORY_FILE,
        JSON.stringify(memory, null, 2)
    );
}

module.exports = {
    loadUsers,
    saveUsers,
    loadMemory,
    saveMemory
};
