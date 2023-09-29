<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const formData = ref({
        email: '',
        password: '',
        
    });
    const errorMessages = ref({
        emailError: '',
        passwordError: '',
        
    });
    const router = useRouter();

    const submitForm = async () => {
        const { email, password,  terms } = formData.value;
        errorMessages.value.emailError = '';
        errorMessages.value.passwordError = '';

        try {
            let hasError = false;
            
            if (!email.trim()) {
                errorMessages.value.emailError = 'Email is required';
                hasError = true;
            }

            if (!password.trim()) {
                errorMessages.value.passwordError = 'Password is required';
                hasError = true;
            }
            const response = await axios.post('http://127.0.0.1:8000/api-auth/login/', formData.value);

            const { access_token } = response.data;
            localStorage.setItem('token', access_token);
            console.log(response.data);
            formData.value= {
                email: '',
                password: '',
                };
            router.push('/');
        } catch (error) {
            // Si la connexion échoue, vous pouvez gérer l'erreur ici
            if (error.response.status === 401) {
            errorMessages.value.emailError = 'Email ou mot de passe incorrect';
            } else {
            console.error(error);
            }
        }
    };
</script>
<template>

<div class="main">

<section class="gradient-overly-top ptb-100 height-lg-100vh d-flex align-items-center" style="background: url('../assets/img/hero-14.jpg')no-repeat center center / cover">
    <div class="container">
        <div class="row justify-content-center pt-5 pt-sm-5 pt-md-5 pt-lg-0">
            <div class="col-md-6 col-lg-5">
                <div class="card login-signup-card shadow-lg mb-0">
                    <div class="card-body px-md-5 py-5">
                        <div class="mb-5">
                            <h5 class="h3">Login</h5>
                            <p class="text-muted mb-0">Sign in to your account to continue.</p>
                        </div>

                        <!--login form-->
                        <form class="login-signup-form" @submit.prevent="submitForm">
                            <div class="form-group">
                                <label class="pb-1">Email Address</label>
                                <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span class="ti-email color-primary"></span>
                                    </div>
                                    <input v-model="formData.email" type="email" name="email" id="email" class="form-control" placeholder="name@yourdomain.com">
                                </div>
                            </div>
                            <!-- Password -->
                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label class="pb-1">Password</label>
                                    </div>
                                    <div class="col-auto">
                                        <router-link to="/forgot" class="form-text small text-muted">
                                             Forgot password?
                                        </router-link>    
                                    </div>
                                </div>
                                <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span class="ti-lock color-primary"></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="Enter your password" v-model="formData.password" id="password" name="password">
                                </div>
                            </div>

                            <!-- Submit -->
                            <button class="btn btn-block primary-solid-btn border-radius mt-4 mb-3">
                                Sign in
                            </button>

                        </form>
                    </div>
                    <div class="card-footer bg-transparent px-md-5"><small>Not registered?</small>
                        <a href="signup.html" class="small"> Create account</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</div>
</template>