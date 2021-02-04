<template>
  <div id="contact" class="o-contact">
    <div class="m-container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h2 class="a-title">Give us a <span>shout</span></h2>
          <div class="box"></div>
        </div>
        <div class="col-12 offset-md-1 col-md-5">
          <form class="m-form" v-if="!submitted" @submit.prevent="submitForm">
            <div
              class="control-wrap"
              :class="{ invalid: nameValidity === 'invalid' }"
            >
              <input
                class="form-control"
                type="text"
                @blur="validateInput('name')"
                placeholder="My name is..."
                v-model.trim="name"
              />
              <p v-if="nameValidity === 'invalid'">Please enter a valid name</p>
            </div>
            <div
              class="control-wrap"
              :class="{ invalid: subjectValidity === 'invalid' }"
            >
              <input
                type="text"
                class="form-control"
                placeholder="And I'd like to talk about..."
                v-model.trim="subject"
                @blur="validateInput('subject')"
              />
              <p v-if="subjectValidity === 'invalid'">
                Please enter a valid subject
              </p>
            </div>
            <div
              class="control-wrap"
              :class="{ invalid: emailValidity === 'invalid' }"
            >
              <input
                placeholder="My email address is..."
                class="form-control"
                type="email"
                v-model.trim="email"
                @blur="validateInput('email')"
              />
              <p v-if="emailValidity === 'invalid'">
                Please enter a valid email
              </p>
            </div>
            <p class="error" v-if="invalidInput">
              One or more input fields are invalid. Please check your provided
              data.
            </p>
            <p class="error" v-if="error">{{ error }}</p>
            <div class="button-group">
              <button class="a-btn" type="submit">
                Send
                <span
                  ><svg
                    width="32"
                    height="8"
                    viewBox="0 0 32 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
          <div v-else class="m-success">
              <h3>Thanks</h3>
              <p>Thanks for contacting us. We will be in touch soon.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      subject: '',
      email: '',
      nameValidity: 'pending',
      subjectValidity: 'pending',
      emailValidity: 'pending',
      invalidInput: false,
      error: null,
      submitted: false,
    };
  },
  methods: {
    validateInput(type) {
      if (type === 'name') {
        if (this.name === '') {
          this.nameValidity = 'invalid';
        } else {
          this.nameValidity = 'valid';
        }
      } else if (type === 'subject') {
        if (this.subject === '') {
          this.subjectValidity = 'invalid';
        } else {
          this.subjectValidity = 'valid';
        }
      } else if (type === 'email') {
        if (this.email === '') {
          this.emailValidity = 'invalid';
        } else {
          this.emailValidity = 'valid';
        }
      }
    },
    submitForm() {
      if (this.name === '' || !this.subject === '' || this.email === '') {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;
      fetch('https://the-test-60140-default-rtdb.firebaseio.com/submissions.json', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          subject: this.subject,
          email: this.email,
        }),
      }).then(response => {
        if (response.ok) {
          this.submitted = true;
        } else {
          throw new Error('Could not save data!');
        }
      }).catch(error => {
        this.error = error.message;
      });

      this.name = '';
      this.subject = '';
      this.email = '';
    },
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/_index.scss";
.o-contact {
  background: black;
  padding: 0.6875rem 15px 3.125rem;

  .m-container {
    .a-title {
      color: $white;
      text-transform: uppercase;
      text-align: center;
      span {
        font-weight: 700;
        font-size: 4.5rem;
      }
    }
    .box {
      background: $blue;
      height: 47px;
      margin-bottom: 3.125rem;
    }
    .m-form {
      .form-control {
        background: black;
        color: $white;
        letter-spacing: 0.255em;
        border-radius: 0;
        box-shadow: none;
        border: 0;
        border-bottom: solid 1px $white;
        height: calc(1.5em + 2.125rem + 2px);
        padding: 1.0625rem 0.75rem;
        padding-left: 0;
        &::placeholder {
          color: $white;
          letter-spacing: 0.255em;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
          -webkit-text-fill-color: $white;
          -webkit-box-shadow: 0 0 0px 1000px #000 inset;
        }
        &:focus,
        &:focus-visible {
          outline: none;
        }
      }
      .control-wrap {
        margin-bottom: 1rem;
        &.invalid {
          .form-control {
            &::placeholder {
              color: $red;
            }
          }
          p {
            color: $red;
            margin-bottom: 0;
            letter-spacing: 0.255em;
          }
        }
      }
      p {
          &.error {
              color: $red;
          }
      }
      .button-group {
        display: flex;
        margin-top: 2rem;
        .a-btn {
          background: transparent;
          border: 0;
          color: $white;
          text-transform: uppercase;
          font-size: 1.5rem;
          line-height: 100%;
          letter-spacing: 0.255em;
          margin-left: auto;
          transition: color 0.3s ease-in;
          span {
            margin-left: 15px;
          }

          &:hover {
            color: $blue;
          }
          &:focus,
          &:focus-visible {
            outline: none;
          }
        }
      }
    }
    .m-success {
        * { color: $green; }
    }
  }
}

@media ($sm-up) {
  .o-contact {
    padding: 6.875rem 0 3.125rem;
    .m-container {
      max-width: 944px;
      width: calc(100% - 30px);
      margin: 0 auto;
      padding-left: 15px;
      padding-right: 15px;
      .a-title {
        text-align: left;
        span {
          font-size: 5rem;
        }
      }
    }
  }
}

@media ($lg-up) {
  .o-contact {
    .m-container {
      max-width: 1084px;
    }
  }
}
</style>
