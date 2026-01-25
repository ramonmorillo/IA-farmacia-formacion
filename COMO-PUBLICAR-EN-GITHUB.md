# 📤 Guía para Publicar en GitHub Pages

Sigue estos pasos exactos para publicar tu herramienta formativa en internet (GRATIS).

## 🎯 Lo que necesitas

- [ ] Una cuenta de GitHub (gratis) - si no tienes, crea una en https://github.com
- [ ] Los archivos de este proyecto descargados en tu ordenador
- [ ] 10 minutos de tiempo

---

## 📝 PASO 1: Crear cuenta en GitHub (si no tienes)

1. Ve a https://github.com
2. Haz clic en **"Sign up"** (Registrarse)
3. Elige un nombre de usuario (ejemplo: `farmaceutico-juan`)
4. Pon tu email y una contraseña
5. Verifica tu email
6. ¡Listo! Ya tienes cuenta

---

## 📁 PASO 2: Crear un repositorio nuevo

1. En GitHub, haz clic en el **botón verde "New"** (arriba a la izquierda)
   - O ve directamente a: https://github.com/new

2. Rellena estos campos:
   - **Repository name** (nombre): `ia-farmacia-formacion`
   - **Description** (descripción): `Herramienta formativa para uso responsable de IA en farmacia`
   - **Public** ← Selecciona esta opción (para que GitHub Pages funcione gratis)
   - ✅ Marca: **"Add a README file"** (lo borraremos luego)

3. Haz clic en **"Create repository"** (Crear repositorio)

---

## ⬆️ PASO 3: Subir los archivos

Hay dos formas de hacerlo. Elige la que prefieras:

### OPCIÓN A: Subir desde la web de GitHub (MÁS FÁCIL)

1. En tu repositorio recién creado, busca el botón **"uploading an existing file"** o **"Add file" → "Upload files"**

2. Arrastra TODA la carpeta `ia-farmacia-formacion` a la ventana
   - O haz clic en "choose your files" y selecciona todo

3. Espera a que se suban todos los archivos (puede tardar 1-2 minutos)

4. En la caja de texto abajo, escribe: `Subir contenido inicial`

5. Haz clic en **"Commit changes"** (Confirmar cambios)

### OPCIÓN B: Usar Git (requiere instalarlo)

Si sabes usar Git o quieres aprender:

```bash
# 1. Navega a la carpeta del proyecto
cd ia-farmacia-formacion

# 2. Inicializa Git
git init

# 3. Añade todos los archivos
git add .

# 4. Haz el primer commit
git commit -m "Contenido inicial"

# 5. Conecta con tu repositorio (cambia TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/ia-farmacia-formacion.git

# 6. Sube los archivos
git push -u origin main
```

---

## 🌐 PASO 4: Activar GitHub Pages

1. En tu repositorio, haz clic en **"Settings"** (Configuración) - arriba a la derecha

2. En el menú lateral izquierdo, busca **"Pages"** (casi al final)

3. En la sección **"Source"** (Fuente):
   - **Branch**: Selecciona `main`
   - **Folder**: Selecciona `/ (root)`

4. Haz clic en **"Save"** (Guardar)

5. **¡ESPERA 1-2 MINUTOS!** GitHub está procesando tu web

6. Refresca la página. Verás un mensaje verde que dice:
   ```
   Your site is live at https://TU-USUARIO.github.io/ia-farmacia-formacion/
   ```

7. ¡HAZ CLIC EN ESE ENLACE! Tu web ya está publicada 🎉

---

## ✅ PASO 5: Verificar que funciona

1. Abre el enlace de tu GitHub Pages
2. Deberías ver la página principal con el título "IA en Farmacia"
3. Prueba hacer clic en uno de los perfiles (Estudiantes, Comunitaria, etc.)
4. Prueba un caso interactivo

Si todo funciona, ¡ya está! 🎊

---

## 🔄 Cómo actualizar el contenido después

Si quieres hacer cambios:

### Desde la web de GitHub:
1. Ve a tu repositorio
2. Navega hasta el archivo que quieres cambiar
3. Haz clic en el icono del lápiz (editar)
4. Haz los cambios
5. Abajo, escribe qué cambiaste
6. Haz clic en "Commit changes"
7. Espera 1-2 minutos y los cambios aparecerán en tu web

### Con Git (si lo usaste antes):
```bash
# 1. Edita los archivos que quieras
# 2. Guarda los cambios
git add .
git commit -m "Descripción de lo que cambiaste"
git push
```

---

## 🎓 Compartir tu herramienta

Una vez publicada, puedes compartir tu enlace:

**Enlace corto**: `https://TU-USUARIO.github.io/ia-farmacia-formacion/`

**Ejemplos de uso**:
- Enviar por email a colegas
- Compartir en redes sociales profesionales
- Usar en talleres presenciales (proyectando la web)
- Incluir en material formativo de tu institución

---

## ❓ Problemas comunes

### "Mi web no aparece después de 2 minutos"
- Espera un poco más (a veces tarda hasta 5 minutos)
- Verifica que seleccionaste "main" y "/ (root)" en Settings → Pages
- Asegúrate de que el repositorio es **público**, no privado

### "Los enlaces no funcionan / aparecen rotos"
- Verifica que todos los archivos se subieron correctamente
- Comprueba que la estructura de carpetas es la correcta (css/, modulos/, etc.)

### "Quiero cambiar el nombre del repositorio"
- Ve a Settings → Repository name
- Cambia el nombre
- Tu nuevo enlace será: `https://TU-USUARIO.github.io/NUEVO-NOMBRE/`

### "Quiero mi propio dominio (www.mi-farmacia.com)"
- GitHub Pages permite dominios personalizados
- Necesitas comprar un dominio (GoDaddy, Namecheap, etc.)
- Sigue la guía oficial: https://docs.github.com/es/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## 🎉 ¡Felicidades!

Ya tienes tu herramienta formativa publicada en internet, accesible para cualquiera con el enlace, totalmente gratis, y sin necesidad de saber programar.

**¿Siguiente paso?**
- Comparte el enlace con colegas farmacéuticos
- Úsala en tu próximo taller
- Recibe feedback y haz mejoras
- ¡Contribuye a la formación responsable en IA!

---

## 📞 ¿Necesitas ayuda?

Si tienes problemas con GitHub Pages:
- Documentación oficial: https://docs.github.com/es/pages
- GitHub Community: https://github.com/orgs/community/discussions

Si tienes dudas sobre el contenido de la herramienta:
- Revisa el README.md del proyecto
- Consulta la sección de recursos en la web

---

**Recuerda**: Esta herramienta es exclusivamente formativa. No sustituye formación reglada ni orientación profesional. Prohibido el uso con datos reales de pacientes.
