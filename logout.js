function logoutUser(username) {
    const time = new Date().toLocaleTimeString();
    console.log(`User ${username} logged out at ${time}.`);
}
