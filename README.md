# DjangoProject Beginner Project: Simple Homepage with Navbar, Footer, and Photo Gallery

## Description

This beginner-friendly project aims to help learners get hands-on experience in building a simple homepage using Django, HTML, CSS, and JavaScript. The project includes a navigation bar (navbar), a footer, and a photo gallery section. It serves as an introduction to web development with Django and the integration of frontend technologies. For a tutorial see https://www.youtube.com/watch?v=rHux0gMZ3Eg&t=630s&ab_channel=ProgrammingwithMosh

## Prerequisites

Before starting this project, make sure you have the following installed on your development machine:

- Python and Django
- Code Editor (e.g., Visual Studio Code)
- Web Browser (e.g., Google Chrome)

## Project Setup

1. **Create a Django Project:**
   - Run the following commands in your terminal:
     ```bash
     django-admin startproject myhomepage
     cd myhomepage
     ```

2. **Create a Django App:**
   - Inside your project directory, run:
     ```bash
     python manage.py startapp main
     ```

3. **Set Up Templates and Static Files:**
   - Create `templates` and `static` directories inside the `main` app.
   - Place HTML templates in the `templates` directory and static files (CSS, JavaScript, and images) in the `static` directory.

4. **Define URLs and Views:**
   - Set up URLs in `main/urls.py` and create views in `main/views.py`.
   - Connect the URLs to the views.

5. **Build Navbar, Footer, and Photo Gallery:**
   - Design a simple navbar with navigation links in `navbar.html`.
   - Create a footer in `footer.html`.
   - Set up a photo gallery section in `gallery.html`.

6. **Static Files Configuration:**
   - Configure Django to handle static files. Update your project's `settings.py`:
     ```python
     # settings.py

     INSTALLED_APPS = [
         # ...
         'playground',
     ]


7. **Include Templates in Views:**
   - Include the created HTML templates in your views.

8. **Run the Development Server:**
   - Run the development server using:
     ```bash
     python manage.py runserver
     ```

   - Visit `http://127.0.0.1:8000/` in your web browser to see your homepage.

## Learning Objectives

- Gain familiarity with Django project and app structure.
- Understand the role of HTML, CSS, and JavaScript in a web project.
- Learn to create basic navigation components (navbar and footer).
- Practice setting up a photo gallery using HTML and CSS.

## Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [MDN Web Docs (HTML, CSS, JavaScript)](https://developer.mozilla.org/)
- [Bootstrap](https://getbootstrap.com/)

## Next Steps

As you progress, consider exploring more advanced Django features, improving the styling of your homepage, and adding dynamic content to your photo gallery. Happy coding!
