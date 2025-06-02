# Start from official WordPress image
FROM wordpress:latest

# Set working directory
WORKDIR /var/www/html

# Copy custom content (optional, if you have themes/plugins/etc.)
# COPY ./wp-content ./wp-content

# Set correct permissions (optional)
# RUN chown -R www-data:www-data /var/www/html

# Expose WordPress port
EXPOSE 80

# Start Apache (already in base image)
CMD ["apache2-foreground"]
