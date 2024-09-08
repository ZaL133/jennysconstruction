// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
  defaultTheme: 'light',
  themes: {
      light: {
        primary: '#1ecbe1',
        secondary: '#424242', // Dark grey for contrast
        accent: '#82B1FF', // Light blue for subtle accents
        error: '#FF5252', // Red for errors or alerts
        info: '#2196F3',  // Standard info blue
        success: '#4CAF50', // Green for success messages
        warning: '#FFC107', // Yellow for warnings
      },
    },
  },
});