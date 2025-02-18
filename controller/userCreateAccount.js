document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.form-container.sign-up form');
   


    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = signupForm.querySelector('input[name="username"]').value;
        const name = signupForm.querySelector('input[name="name"]').value;
        const password = signupForm.querySelector('input[name="password"]').value;

        try {
            const response = await fetch('http://124.158.5.70:8081/restaurant/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, name })
            });

            if (!response.ok) {
                const errorResult = await response.json();
                throw new Error(`Tài khoản tồn tại: ${errorResult.message || response.statusText}`);
            }

            const result = await response.json();
            alert('Đăng ký thành công!');

          
            localStorage.setItem('userID', result.userID);  
            localStorage.setItem('name', result.name); 
            localStorage.setItem('username', username);

        } catch (error) {
            console.error('Lỗi đăng ký:', error);
            alert(error.message);
        }
    });
})
 
   
