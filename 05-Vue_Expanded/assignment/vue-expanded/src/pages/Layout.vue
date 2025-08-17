<script setup>
import { ref, computed } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

const pageTitle = ref('Checkout Form')
const billingTitle = ref('Billing Address')
const paymentTitle = ref('Payment')
const acceptedCardsLabel = ref('Accepted Cards')
const shippingCheckboxLabel = ref('Shipping address same as billing')
const submitButtonText = ref('Continue to checkout')
const disabledButtonText = ref('Please fill required fields')
const cartTitle = ref('Your Cart')
const totalLabel = ref('Total')

const sameAsShipping = ref(true)
const isFormValid = ref(true)

// Billing form fields array for v-for 
const billingFields = ref([
  { 
    id: 'fullName', 
    label: 'Full Name', 
    type: 'text', 
    icon: 'fa-solid fa-user', 
    placeholder: 'John M. Smith',
    required: true 
  },
  { 
    id: 'email', 
    label: 'Email', 
    type: 'email', 
    icon: 'fa-solid fa-envelope', 
    placeholder: 'john@example.com',
    required: true 
  },
  { 
    id: 'address', 
    label: 'Address', 
    type: 'text', 
    icon: 'fa-solid fa-house', 
    placeholder: '1234 Main St',
    required: true 
  },
  { 
    id: 'city', 
    label: 'City', 
    type: 'text', 
    icon: null, 
    placeholder: 'Seattle',
    required: true 
  }
])
// Address fields for state and zip
const addressFields = ref([
  { id: 'state', 
  label: 'State', 
  type: 'text', 
  placeholder: 'WA', 
  required: true 
},
  { id: 'zip', 
  label: 'Zip', 
  type: 'text', 
  placeholder: '98001', 
  required: true }
])
// Payment form fields array
const paymentFields = ref([
  { 
    id: 'cardName', 
    label: 'Name on Card', 
    type: 'text', 
    placeholder: 'John Smith',
    required: true 
  },
  { 
    id: 'ccNumber', 
    label: 'Card Number', 
    type: 'text', 
    placeholder: '0000-0000-0000-0000',
    required: true 
  }
])
// Card details fields
const cardDetailsFields = ref([
  { id: 'exp', label: 'Exp: MM/YY', type: 'text', placeholder: '00/00', required: true },
  { id: 'cvv', label: 'CVV', type: 'text', placeholder: '123', required: true }
])
// Accepted payment cards v-for 
const acceptedCards = ref([
  { type: 'Visa', iconClass: 'fa-brands fa-cc-visa text-primary' },
  { type: 'Discover', iconClass: 'fa-brands fa-cc-discover text-warning' },
  { type: 'Mastercard', iconClass: 'fa-brands fa-cc-mastercard text-danger' },
  { type: 'Apple Pay', iconClass: 'fa-brands fa-cc-apple-pay text-dark' }
])
const cartItems = ref([
  { id: 1, name: 'Item 1', price: 15 },
  { id: 2, name: 'Item 2', price: 8 },
  { id: 3, name: 'Item 3', price: 5 },
  { id: 4, name: 'Item 4', price: 2 }
])
const cartTotal = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price, 0)
)

</script>

<template>
  
    <main class="container my-5">
      <PageHeader>
        <template #title>{{ pageTitle }}</template>
        <template #subtitle>Secure Payment Processing</template>
        <template #description>
          <p>Complete your purchase with our secure checkout form. All payment information is encrypted and protected.</p>
        </template>
      </PageHeader>

      <div class="row g-3 flex-column-reverse flex-sm-row">
        <!-- Checkout Form -->
        <form class="col-sm-12 col-md-7 col-lg-8">
          <div class="p-4 bg-light rounded border">
            <div class="row">

              <!-- Billing -->
              <div class="col-md-6">
                <h3 class="mb-4">{{ billingTitle }}</h3>

                <!--v-for loop through billing form fields-->
                <div v-for="field in billingFields" :key="field.id" class="mb-3">
                  <label :for="field.id" class="form-label">
                    <i v-if="field.icon" :class="field.icon" class="me-2"></i> 
                    {{ field.label }}
                    <span v-if="field.required" class="text-danger">*</span>
                  </label>

                  <input 
                    :type="field.type" 
                    class="form-control" 
                    :id="field.id" 
                    :placeholder="field.placeholder"
                    :required="field.required"
                  >
                </div>

                <!--Expierd ad CVV in same row-->
                <div class="row">
                  <div v-for="field in addressFields" :key="field.id" class="col-md-6">
                    <label :for="field.id" class="form-label">
                        {{ field.label }}
                        <span v-if="field.required" class="text-danger">*</span>
                    </label>
                    <input 
                      :type="field.type" 
                      class="form-control mb-3" 
                      :id="field.id" 
                      :placeholder="field.placeholder"
                      :required="field.required"
                    
                    >
                  </div>
                </div>
              </div>

              <!-- Payment -->
              <div class="col-md-6">
                <h3 class="mb-4">{{ paymentTitle }}</h3>
                <label class="form-label">{{ acceptedCardsLabel }}</label>
                <div class="mb-2 fs-3">
                  <i v-for="card in acceptedCards" :key="card.type" :class="[card.iconClass, 'me-2']"></i>
                </div>

                <div v-for="field in paymentFields" :key="field.id" class="mb-3">
                  <label :for="field.id" class="form-label">{{ field.label }}</label>
                  <input 
                    :type="field.type" 
                    class="form-control" 
                    :id="field.id" 
                    :placeholder="field.placeholder"
                  >
                </div>

                <div class="row">
                  <div v-for="field in cardDetailsFields" :key="field.id" class="col-md-6">
                    <label :for="field.id" class="form-label">{{ field.label }}</label>
                    <input 
                      :type="field.type" 
                      class="form-control mb-3" 
                      :id="field.id" 
                      :placeholder="field.placeholder"
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Shipping Checkbox -->
            <div class="form-check my-3">
              <input 
                type="checkbox" 
                class="form-check-input" 
                id="sameAddress" 
                v-model="sameAsShipping"
              >
              <label for="sameAddress" class="form-check-label">
                {{ shippingCheckboxLabel }}
            </label>
            </div>

            <button v-if="isFormValid" type="submit" class="btn btn-primary">{{ submitButtonText }}</button>
            <button v-else type="button" class="btn btn-secondary" disabled>{{ disabledButtonText }}</button>
          </div>
        </form>

        <!-- Cart -->
        <div class="col-sm-12 col-md-5 col-lg-4">
          <div class="p-4 bg-light rounded border">
            <h4>{{ cartTitle }}
              <span class="float-end">
                <i class="fa-solid fa-cart-shopping"></i> {{ cartItems.length }}
              </span>
            </h4>

            <!--v-for loop cart items-->
            <p v-for="item in cartItems" :key="item.id">
              <a href="#" class="cart-item-link">{{ item.name }}</a>
              <span class="float-end text-muted">${{ item.price }}</span>
            </p>
            <hr>
            <p><b>{{ totalLabel }} <span class="float-end">${{ cartTotal }}</span></b></p>
          </div>
        </div>
      </div>
    </main>

</template>

<style scoped>
.btn {
  transition: all 0.3s ease;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.cart-item-link {
  color: hotpink;
}
/* Card icons styling */
.fa-brands {
  font-size: 1.5rem;
  transition: transform 0.2s ease;
}

.fa-brands:hover {
  transform: scale(1.1);
}
@media (max-width: 768px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .p-4 {
    padding: 1.5rem !important;
  }
  
  .btn-lg {
    font-size: 1rem;
    padding: 0.75rem 1.25rem;
  }
}
</style>
