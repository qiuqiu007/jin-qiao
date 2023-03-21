FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/nginx.conf
CMD ["/bin/bash", "-c", "sed -i \"s@<html@<html profile=\"$PROFILE\"@\" /usr/share/nginx/html/index.html; nginx -g \"daemon off;\""]
