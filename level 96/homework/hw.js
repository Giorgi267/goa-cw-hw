        const users = [];


        function User(name, email, password) {
            this.name = name;
            this.email = email;
            this.password = password;
        }


        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('regName').value.trim();
            const email = document.getElementById('regEmail').value.trim().toLowerCase();
            const password = document.getElementById('regPassword').value;


            const exists = users.some(u => u.email === email);
            if (exists) {
                alert('ეს ელ.ფოსტა უკვე გამოყენებულია!');
                return;
            }

            const newUser = new User(name, email, password);
            users.push(newUser);
            alert('რეგისტრაცია წარმატებით დასრულდა!');
            this.reset();
        });

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim().toLowerCase();
            const password = document.getElementById('loginPassword').value;

            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                alert('ავტორიზაცია წარმატებით დასრულდა, მოგესალმებით ' + user.name + '!');
            } else {
                alert('ელ.ფოსტა ან პაროლი არასწორია!');
            }
            this.reset();
        });