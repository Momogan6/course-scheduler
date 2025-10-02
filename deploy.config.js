/**
 * Deployment Configuration for Class Scheduler Application
 * 
 * This file contains configuration settings for deploying the Class Scheduler application
 * to different environments. It includes settings for development, staging, and production
 * environments.
 */

const deployConfig = {
  // Common configuration across all environments
  common: {
    appName: 'Class Scheduler',
    appVersion: '1.0.0',
    author: 'Your Name',
    contact: 'dev@example.com',
    repository: 'https://github.com/yourusername/class-scheduler'
  },
  
  // Development environment configuration
  development: {
    environment: 'development',
    apiUrl: 'http://localhost:3000/api',
    debugMode: true,
    loggingLevel: 'verbose',
    features: {
      analytics: false,
      notifications: true,
      dataExport: true,
      dataImport: true
    }
  },
  
  // Staging environment configuration
  staging: {
    environment: 'staging',
    apiUrl: 'https://staging-api.classscheduler.com/api',
    debugMode: false,
    loggingLevel: 'info',
    features: {
      analytics: true,
      notifications: true,
      dataExport: true,
      dataImport: true
    }
  },
  
  // Production environment configuration
  production: {
    environment: 'production',
    apiUrl: 'https://api.classscheduler.com/api',
    debugMode: false,
    loggingLevel: 'error',
    features: {
      analytics: true,
      notifications: true,
      dataExport: true,
      dataImport: true
    }
  }
};

// Function to get the configuration for the current environment
function getConfig(env = 'development') {
  if (!deployConfig[env]) {
    throw new Error(`Environment ${env} is not defined in the configuration`);
  }
  
  // Merge common config with environment-specific config
  return {
    ...deployConfig.common,
    ...deployConfig[env]
  };
}

// Export the configuration based on the current environment
// The environment is determined by the NODE_ENV environment variable
const currentEnvironment = process.env.NODE_ENV || 'development';
const config = getConfig(currentEnvironment);

module.exports = config;
