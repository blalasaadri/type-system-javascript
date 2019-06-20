FROM gitpod/workspace-full

COPY .gitpod.bashrc .
RUN cat .gitpod.bashrc >> ~/.bashrc
RUN nvm install v12.4.0 && nvm alias default stable