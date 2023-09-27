<script setup>

    import { ref  } from 'vue';
    import { useRouter } from 'vue-router';
    const formData = ref({
        name:'',
        email: '',
        password: '',
        term:false,
    });
    const errorMessages = ref({
      name: '',
      emailError: '',
      passwordError: '',
      term:''
    });
    const successMessage = ref(null);
    const router = useRouter();

    const submitForm = async () => {
      const { name, email, password,term} = formData.value;
      errorMessages.value = {
        nameError: '',
        emailError: '',
        passwordError: '',
        termError:'',
      };
      let hasError = false;
      try {
        
        if (!name.trim()) {
          errorMessages.value.nameError = 'name is required';
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
        if (term == false) {
          errorMessages.value.termError = 'You must accept our terms and conditions before register';
          hasError = true;
        }
        console.log(formData);
        formData.value= {
          name: '',
          email: '',
          password: '',
          term:false,
        };
        
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
                                            Your Name
                                        </label>
                                        <!-- Input group -->
                                        <div class="input-group input-group-merge">
                                            <div class="input-icon">
                                                <span class="ti-user color-primary"></span>
                                            </div>
                                            <input v-model="formData.name" name="name" id="name" type="text" class="form-control" placeholder="Enter your name">
                                            <p v-if="errorMessages.nameError" class="text-red-500 text-sm">{{ errorMessages.nameError }}</p>
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
                                <a href="login.html" class="small">Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>