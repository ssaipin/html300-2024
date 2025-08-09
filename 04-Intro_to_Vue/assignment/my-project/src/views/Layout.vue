<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    
    <!-- Bootstrap container with margin -->
    <main class="container my-5">
      <h2 class="mb-4">{{ pageTitle }}</h2>

      <!-- Bootstrap flex layout: reverse column on small screens for mobile-first design -->
      <div class="row g-3 flex-column-reverse flex-sm-row">
        
        <!-- Checkout Form Section -->
        <!-- Bootstrap responsive columns: full width on sm, 7/12 on md, 8/12 on lg -->
        <form class="col-sm-12 col-md-7 col-lg-8">
          <div class="p-4 bg-light rounded border">
            
            <!-- Form row containing billing and payment sections -->
            <div class="row">
              
              <!-- Billing Address Section -->
              <div class="col-md-6">
                <h3 class="mb-4">{{ billingTitle }}</h3>
                
                <!-- v-for loop to iterate through billing form fields -->
                <div v-for="field in billingFields" :key="field.id" class="mb-3">
                  <label :for="field.id" class="form-label">
                    <i v-if="field.icon" :class="field.icon"></i> {{ field.label }}
                  </label>
                  <input 
                    :type="field.type" 
                    class="form-control" 
                    :id="field.id" 
                    :placeholder="field.placeholder"
                  >
                </div>

                <!-- State and Zip in same row using Bootstrap grid -->
                <div class="row">
                  <div v-for="field in addressFields" :key="field.id" class="col-md-6">
                    <label :for="field.id" class="form-label">{{ field.label }}</label>
                    <input 
                      :type="field.type" 
                      class="form-control mb-3" 
                      :id="field.id"
                    >
                  </div>
                </div>
              </div>

              <!-- Payment Section -->
              <div class="col-md-6">
                <h3 class="mb-4">{{ paymentTitle }}</h3>
                
                <label class="form-label">{{ acceptedCardsLabel }}</label>
                <!-- v-for loop for accepted payment icons -->
                <div class="mb-2 fs-3">
                  <i 
                    v-for="card in acceptedCards" 
                    :key="card.type"
                    :class="card.iconClass"
                    class="me-2"
                  ></i>
                </div>

                <!-- v-for loop for payment form fields -->
                <div v-for="field in paymentFields" :key="field.id" class="mb-3">
                  <label :for="field.id" class="form-label">{{ field.label }}</label>
                  <input 
                    :type="field.type" 
                    class="form-control" 
                    :id="field.id" 
                    :placeholder="field.placeholder"
                  >
                </div>

                <!-- Expiry and CVV in same row -->
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

            <!-- Shipping checkbox with form validation -->
            <div class="form-check my-3">
              <input 
                type="checkbox" 
                class="form-check-input" 
                id="sameAddress" 
                v-model="sameAsShipping"
              >
              <label for="sameAddress" class="form-check-label">{{ shippingCheckboxLabel }}</label>
            </div>

            <!-- v-if/v-else: Show different button text based on form state -->
            <button v-if="isFormValid" type="submit" class="btn btn-primary">{{ submitButtonText }}</button>
            <button v-else type="button" class="btn btn-secondary" disabled>{{ disabledButtonText }}</button>
          </div>
        </form>

        <!-- Shopping Cart Section -->
        <!-- Bootstrap responsive columns: full width on sm, 5/12 on md, 4/12 on lg -->
        <div class="col-sm-12 col-md-5 col-lg-4">
          <div class="p-4 bg-light rounded border">
            <h4>{{ cartTitle }}
              <span class="float-end">
                <i class="fa-solid fa-cart-shopping"></i> {{ cartItems.length }}
              </span>
            </h4>

            <!-- v-for loop to iterate through cart items -->
            <p v-for="item in cartItems" :key="item.id">
              <a href="#">{{ item.name }}</a> 
              <span class="float-end text-muted">${{ item.price }}</span>
            </p>
            
            <hr>
            <p><b>{{ totalLabel }} <span class="float-end">${{ cartTotal }}</span></b></p>
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: 'LayoutPage',
  components: {
    NavBar,
    AppFooter
  },
  data() {
    return {
      // Page content variables
      pageTitle: 'Checkout Form',
      billingTitle: 'Billing Address',
      paymentTitle: 'Payment',
      acceptedCardsLabel: 'Accepted Cards',
      shippingCheckboxLabel: 'Shipping address same as billing',
      submitButtonText: 'Continue to checkout',
      disabledButtonText: 'Please fill required fields',
      cartTitle: 'Cart',
      totalLabel: 'Total',
      
      // Form state variables for v-if/v-else
      sameAsShipping: true,
      isFormValid: true,

      // Billing form fields array for v-for 
      billingFields: [
        { id: 'fullName', label: 'Full Name', type: 'text', icon: 'fa-solid fa-user', placeholder: 'John M. Smith' },
        { id: 'email', label: 'Email', type: 'email', icon: 'fa-solid fa-envelope', placeholder: '' },
        { id: 'address', label: 'Address', type: 'text', icon: 'fa-solid fa-house', placeholder: '' },
        { id: 'city', label: 'City', type: 'text', icon: null, placeholder: '' }
      ],

      // Address fields for state and zip
      addressFields: [
        { id: 'state', label: 'State', type: 'text' },
        { id: 'zip', label: 'Zip', type: 'text' }
      ],

      // Payment form fields array
      paymentFields: [
        { id: 'cardName', label: 'Name on Card', type: 'text', placeholder: '' },
        { id: 'ccNumber', label: 'Card Number', type: 'text', placeholder: '0000-0000-0000-0000' }
      ],

      // Card details fields
      cardDetailsFields: [
        { id: 'exp', label: 'Exp: mm/yy', type: 'text', placeholder: '00/00' },
        { id: 'cvv', label: 'CVV', type: 'text', placeholder: '000' }
      ],

      // Accepted payment cards array for v-for iteration
      acceptedCards: [
        { type: 'visa', iconClass: 'fa-brands fa-cc-visa text-primary' },
        { type: 'discover', iconClass: 'fa-brands fa-cc-discover text-warning' },
        { type: 'mastercard', iconClass: 'fa-brands fa-cc-mastercard text-danger' },
        { type: 'applepay', iconClass: 'fa-brands fa-cc-apple-pay' }
      ],

      // Shopping cart items array for v-for iteration
      cartItems: [
        { id: 1, name: 'Item 1', price: 15 },
        { id: 2, name: 'Item 2', price: 8 },
        { id: 3, name: 'Item 3', price: 5 },
        { id: 4, name: 'Item 4', price: 2 }
      ]
    }
  },
  computed: {
    // Computed property to calculate total cart value
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0)
    }
  }
}
</script>