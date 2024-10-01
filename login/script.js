const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

document.addEventListener('DOMContentLoaded', (event) => {  
    // 获取表单和按钮元素  
    const loginForm = document.getElementById('form2');  
    const registerForm = document.getElementById('form1');  
    const loginBtn = document.getElementById('loginBtn');  
    const registerBtn = document.getElementById('registerBtn');  
  
    // 邮箱格式的正则表达式  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
  
    // 禁用按钮  
    loginBtn.classList.add('disabled');  
    registerBtn.classList.add('disabled');  
  
    // 登录表单验证函数  
    function validateLoginForm() {  
        const email = loginForm.querySelector('input[type="email"]').value;  
        const password = loginForm.querySelector('input[type="password"]').value;  
        if (emailRegex.test(email) && password.length > 0) {  
            // 验证通过，可以进行跳转  
            alert('登录成功！');  
            // 示例跳转，实际应替换为您的登录后页面URL  
            window.location.href = 'https://www.runcloud.asia/run';  
        } else {  
            alert('请输入有效的邮箱和密码！');  
        }  
    }  
  
    // 注册表单验证函数  
    function validateRegisterForm() {  
        const username = registerForm.querySelector('input[type="text"]').value;  
        const email = registerForm.querySelector('input[type="email"]').value;  
        const password = registerForm.querySelector('input[type="password"]').value;  
        if (username.length > 0 && emailRegex.test(email) && password.length > 0) {  
            // 验证通过，可以进行跳转  
            alert('注册成功！');  
            // 示例跳转，实际应替换为您的注册后页面URL  
            window.location.href = 'https://www.runcloud.asia/run';  
        } else {  
            alert('请输入有效的用户名、邮箱和密码！');  
        }  
    }  
  
    // 添加事件监听器  
    loginBtn.addEventListener('click', (event) => {  
        event.preventDefault(); // 阻止表单的默认提交行为  
        validateLoginForm();  
    });  
  
    registerBtn.addEventListener('click', (event) => {  
        event.preventDefault(); // 阻止表单的默认提交行为  
        validateRegisterForm();  
    });  
  
    // 实时验证输入以启用/禁用按钮  
    const loginEmailInput = loginForm.querySelector('input[type="email"]');  
    const loginPasswordInput = loginForm.querySelector('input[type="password"]');  
    const registerUsernameInput = registerForm.querySelector('input[type="text"]');  
    const registerEmailInput = registerForm.querySelector('input[type="email"]');  
    const registerPasswordInput = registerForm.querySelector('input[type="password"]');  
  
    function updateLoginButton() {  
        loginBtn.classList.toggle('disabled', !(emailRegex.test(loginEmailInput.value) && loginPasswordInput.value.length > 0));  
    }  
  
    function updateRegisterButton() {  
        registerBtn.classList.toggle('disabled', !(registerUsernameInput.value.length > 0 && emailRegex.test(registerEmailInput.value) && registerPasswordInput.value.length > 0));  
    }  
  
    // 监听输入变化  
    [loginEmailInput, loginPasswordInput, registerUsernameInput, registerEmailInput, registerPasswordInput].forEach(input => {  
        input.addEventListener('input', () => {  
            if (loginForm.contains(input)) {  
                updateLoginButton();  
            } else {  
                updateRegisterButton();  
            }  
        });  
    });  
});