<template>
  <div class="contacts" id="contacts">
    <h1>Restons en contact</h1>
    <div class="contacts__logos">
      <div class="contacts__logo">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="contacts__icon" />
        <p>LinkedIn</p>
      </div>
      <div class="contacts__logo">
        <font-awesome-icon :icon="['fas', 'envelope']" class="contacts__icon" />
        <p>E-mail</p>
      </div>
      <div class="contacts__logo">
        <font-awesome-icon :icon="['fab', 'github']" class="contacts__icon" />
        <p>GitHub</p>
      </div>
      <div class="contacts__logo">
        <font-awesome-icon
          :icon="['fas', 'file-arrow-down']"
          class="contacts__icon"
        />
        <p>Télecharge mon CV</p>
      </div>
    </div>
  </div>
</template>