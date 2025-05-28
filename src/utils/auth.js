export const saveUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
};

export const getUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email && user.password === password);
};

export const isAuthenticated = () => {
    return localStorage.getItem('loggedIn') === 'true';
};

export const logout = () => {
    localStorage.removeItem("user");
}