<script setup>
    import axios from 'axios';
    import { ref  } from 'vue';
    import { useRouter } from 'vue-router';
    const formData = ref({
      first_name:'',
        last_name:'',
        username: '',
        email: '',
        password: '',
        role:''
    });
    const errorMessages = ref({
      first_nameError: '',
      last_nameError: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      role:''
    });
    const successMessage = ref(null);
    const router = useRouter();

    const submitForm = async () => {
      const { first_name, last_name, username, email, password,role } = formData.value;
      errorMessages.value = {
        first_nameError: '',
        last_nameError: '',
        usernameError: '',
        emailError: '',
        passwordError: '',
        roleError:'',
      };
      let hasError = false;
      try {
       
        if (!first_name.trim()) {
          errorMessages.value.first_nameError = 'First Name is required';
          hasError = true;
        }
        if (!last_name.trim()) {
          errorMessages.value.last_nameError = 'Last Name is required';
          hasError = true;
        }
        if (!username.trim()) {
          errorMessages.value.usernameError = 'Username is required';
          hasError = true;
        }
        if (!email.trim()) {
          errorMessages.value.emailError = 'email is required';
          hasError = true;
        }
        if (!password.trim()) {
          errorMessages.value.passwordError = 'Password is required';
          hasError = true;
        }
        const response = await axios.post('http://127.0.0.1:8000/api/users/', formData.value);
        console.log(response.data);
        router.push('/login');
      } catch (error) {
        console.log(error);
      }
    };
</script>
<template>
<div class="main">
        <section class="gradient-overly-right ptb-100 height-lg-100vh d-flex align-items-center" style="background: url('../assets/img/hero-bg-4.jpg')no-repeat center center / cover">
            <div class="container">
                <div class="row justify-content-center pt-5 pt-sm-5 pt-md-5 pt-lg-0">
                    <div class="col-md-6 col-lg-5">
                        <div class="card login-signup-card shadow-lg mb-0">
                            <div class="card-body px-md-5 py-5">
                                <div class="mb-5">
                                    <h5 class="h3">Create account</h5>
                                    <p class="text-muted mb-0">Made with love by developers for developers.</p>
                                </div>
                                <form class="login-signup-form" @submit.prevent="submitForm">
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="pb-1">
                                            Your First Name
                                        </label>
                                        <!-- Input group -->
                                        <div class="input-group input-group-merge">
                                            <div class="input-icon">
                                                <span class="ti-user color-primary"></span>
                                            </div>
                                            <input v-model="formData.first_name" name="first_name" id="first_name" type="text" class="form-control" placeholder="Enter your name">
                                            <p v-if="errorMessages.first_nameError" class="text-red-500 text-sm">{{ errorMessages.first_nameError }}</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="pb-1">
                                            YourLast Name
                                        </label>
                                        <!-- Input group -->
                                        <div class="input-group input-group-merge">
                                            <div class="input-icon">
                                                <span class="ti-user color-primary"></span>
                                            </div>
                                            <input v-model="formData.last_name" name="last_name" id="last_name" type="text" class="form-control" placeholder="Enter your name">
                                            <p v-if="errorMessages.last_nameError" class="text-red-500 text-sm">{{ errorMessages.last_nameError }}</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="pb-1">
                                            Your Username
                                        </label>
                                        <!-- Input group -->
                                        <div class="input-group input-group-merge">
                                            <div class="input-icon">
                                                <span class="ti-user color-primary"></span>
                                            </div>
                                            <input v-model="formData.username" name="username" id="username" type="text" class="form-control" placeholder="Enter your name">
                                            <p v-if="errorMessages.usernameError" class="text-red-500 text-sm">{{ errorMessages.usernameError }}</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="pb-1">
                                            Email Address
                                        </label>
                                        <!-- Input group -->
                                        <div class="input-group input-group-merge">
                                            <div class="input-icon">
                                                <span class="ti-email color-primary"></span>
                                            </div>
                                            <input v-model="formData.email" name="email" id="email" type="email" class="form-control" placeholder="name@address.com">
                                            <p v-if="errorMessages.emailError" class="text-red-500 text-sm">{{ errorMessages.emailError }}</p>
                                        </div>
                                    </div>

                                    <!-- Password -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="pb-1">
                                            Password
                                        </label>
                                        <!-- Input group -->
                                        <div class="input-group input-group-merge">
                                            <div class="input-icon">
                                                <span class="ti-lock color-primary"></span>
                                            </div>
                                            <input v-model="formData.password" name="password" id="password" type="password" class="form-control" placeholder="Enter your password">
                                            <p v-if="errorMessages.passwordError" class="text-red-500 text-sm">{{ errorMessages.passwordError }}</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="pb-1">
                                            Roles
                                        </label>
                                        <!-- Input group -->
                                        <div class="input-group input-group-merge">
                                            <div class="input-icon">
                                                <span class="ti-lock color-primary"></span>
                                            </div>
                                            <select name="roles" id="roles" v-model="formData.role" >
                                                <option value="">Rôles</option>
                                                <option value="utilisateur">Utilisateur</option>
                                                <option value="Coach">Coach</option>
                                                <option value="Entreprise">Entreprise</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="my-4">
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input v-model="formData.term" type="checkbox" class="custom-control-input" id="check-terms">
                                            <label class="custom-control-label" for="check-terms">I agree to the <a href="terms-condition.html">terms and conditions</a></label>
                                            <p v-if="errorMessages.termError" class="text-red-500 text-sm">{{ errorMessages.termError }}</p>
                                        </div>
                                    </div>

                                    <!-- Submit -->
                                    <button class="btn btn-block primary-solid-btn border-radius mt-4 mb-3">
                                        Sign up
                                    </button>
                                </form>

                            </div>
                            <div class="card-footer px-md-5 bg-transparent border-top"><small>Already have an acocunt?</small>
                                <router-link to="/login" class="small">Sign in</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>