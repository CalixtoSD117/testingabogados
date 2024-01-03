![Abogados](img/src/app/assets/logo.png)
# Despacho de Abogados: Espinoza Asesores 

## Tabla de contenidos
* Descripccion 
* Dependencias
* Estructura del projeto
* Autores
* Insignias

### Descripcion

lorem21

### Dependencias

libraries{

    #__Spinners__#
    npm i react-spinners
    link: https://www.npmjs.com/package/react-spinners 

    #__Icons__#
    npm install react-icons --save
    link: https://react-icons.github.io/react-icons 

    #__React Tooltip__#
    npm i react-tooltip 
    link: https://www.npmjs.com/package/react-tooltip 

    #__React Toast__#
    npm install react-hot-toast
    link = https://react-hot-toast.com

    #__Bcrypt__#
    npm install bcrypt

}


instalacion de prisma:
npm install prisma --save-dev

para crear el schema:
npx prisma init

para crear las migraciones:
npx prisma migrate dev --name init

prisma client:

npm install @prisma/client


### Estructura del proyecto

```
└── 📁abodago_software
    └── .env
    └── .eslintrc.json
    └── README.md
    └── 📁db
        └── lawyer_db.sql
    └── jsconfig.json
    └── next.config.js
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── 📁prisma
        └── 📁migrations
            └── 📁20231030232417_init
                └── migration.sql
            └── 📁20231121050650_init
                └── migration.sql
            └── migration_lock.toml
        └── schema.prisma
    └── 📁public
        └── next.svg
        └── vercel.svg
    └── 📁src
        └── 📁app
            └── 📁administrativoaddpage
                └── page.jsx
            └── 📁administrativopage
                └── page.jsx
            └── 📁amparoaddpage
                └── page.jsx
            └── 📁amparopage
                └── page.jsx
            └── 📁api
                └── 📁Auth
                    └── 📁signup
                    ├── singin
                └── 📁cases
                    ├── [id]
                └── 📁clients
                    ├── [id]
                └── 📁familiar
                └── 📁infolaw
                    ├── [id]
            └── 📁assets
                └── backlog.png
                └── index.js
                └── logo.png
                └── userimage.png
            └── 📁civiladdpage
                └── page.jsx
            └── 📁civilpage
                └── page.jsx
            └── 📁components
                └── 📁CheckboxCustom
                    └── CheckBoxCustom.jsx
                └── 📁Dropdowns
                    └── Dropdown.jsx
                    └── Userdropdown.jsx
                    └── UserdropdownItems.jsx
                └── 📁LinksButtons
                    └── LinkButtonCustom.jsx
                    └── LinkButtonsSpecials.jsx
                └── 📁Modals
                    └── ChangePasswordModal.jsx
                    └── EditInformationDoc.jsx
                    └── ModalDelete.jsx
                    └── NewClientModal.jsx
                    └── NewColabModal.jsx
                    └── NewPend.jsx
                    └── test.jsx
                └── 📁Pointers
                    └── Pointers.jsx
                └── 📁button
                    └── UserIdentifiquer.jsx
                └── 📁cards
                    └── CardCount.jsx
                └── 📁estados
                    └── Administrativo.jsx
                    └── Civil.jsx
                    └── Familiar.jsx
                    └── Laboral.jsx
                └── 📁lists
                    └── ItemListUserv3.jsx
                    └── LastCaseMakingItem.jsx
                    └── LastCasesMaking.jsx
                    └── ListClients.jsx
                    └── ListClientsItem.jsx
                    └── ListColab.jsx
                    └── ListColabItem.jsx
                    └── ListPendientsItem.jsx
                    └── ListUserv3.jsx
                    └── TodoList.jsx
                    └── TodoListItem.jsx
                └── 📁login
                    └── LoginForm.jsx
                └── 📁navbars
                    └── Navbar.jsx
                    └── Sidebar.jsx
                    └── SidebarPhone.jsx
                └── 📁searchs
                    └── Search.jsx
                └── 📁wizard
                    └── Stepper.jsx
                    └── StepperControl.jsx
                    └── 📁steps
                        └── Complete.jsx
                        └── StepOne.jsx
                        └── StepThree.jsx
                        └── StepTwo.jsx
            └── 📁constants
                └── index.jsx
            └── 📁context
                └── StepperContext.jsx
            └── 📁familiaraddpage
                └── page.jsx
            └── 📁familiarpage
                └── page.jsx
            └── favicon.ico
            └── 📁fiscaliaaddadolecentes
                └── page.jsx
            └── 📁fiscaliaaddestatal
                └── page.jsx
            └── 📁fiscaliaaddfederal
                └── page.jsx
            └── 📁fiscaliaadolecentes
                └── page.jsx
            └── 📁fiscaliaestatal
                └── page.jsx
            └── 📁fiscaliafederal
                └── page.jsx
            └── globals.css
            └── 📁homepage
                └── page.jsx
            └── 📁juzgadoaddestatal
                └── page.jsx
            └── 📁juzgadoaddfederal
                └── page.jsx
            └── 📁juzgadoestatal
                └── page.jsx
            └── 📁juzgadofederal
                └── page.jsx
            └── 📁laboralestatal
                └── page.jsx
            └── 📁laboralestataladdpage
                └── page.jsx
            └── 📁laboralfederal
                └── page.jsx
            └── 📁laboralfederaladdpage
                └── page.jsx
            └── 📁laboraltae
                └── page.jsx
            └── 📁laboraltaeaddpage
                └── page.jsx
            └── 📁mercantiladdpage
                └── page.jsx
            └── 📁mercantilpage
                └── page.jsx
            └── page.jsx
            └── 📁pageclients
                └── page.jsx
            └── 📁pagecolaboradores
                └── page.jsx
            └── 📁penaladdpage
                └── page.jsx
            └── 📁penalpage
                └── page.jsx
            └── 📁pendientespage
                └── page.jsx
            └── 📁settingspage
                └── page.jsx
        └── 📁libs
            └── mysql.js
            └── prisma.js
    └── tailwind.config.js
    ├── uploads
```

### autores

### Insignias