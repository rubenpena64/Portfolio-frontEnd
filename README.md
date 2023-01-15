# Portfolio-frontEnd

Repositorio para el front end de #yoprogramo

La rama main contiene todo el desarrollo del front end estático

La rama Front dinámico contiene todo el desarrollo del front end dinámico

## Otras ramas

Las otras ramas carecen de importancia, ya que se usaron de manera temporal durante el desarrollo

## Funcionamiento general

El proyecto contiene: 

 - un componente principal (inicio) donde están cargados cada uno de los módulos   
 - un componente que contiene la pantalla de logín

## El componente inicio

El componente inicio contiene todos los componentes del la vista inicial:

- El componente encabezado (Estático)
- El componente acerca (Estático. Era dinámico pero lo puse con textos fijos para reducir la cantidad total de servicios a cinco)
- El componente experiencia (Dinámico)
- El componente educacion (Dinámico)
- El componente skills (Dinámico)
- El componente desarrollos (Dinámico)
- El componente foot (Estático)

 Cada uno de los componentes usa dos servicios:

- Su propio servicio con los datos que llegan de la BD. Ubicado en la carpeta servicios/tttp/
- Un servicio que consumen todos los múdulos con los datos de visibilidad o no de los botones, segun está logeado o no.

## Funcionamiento de cada componente

Todos los componentes funcionan de manera similar y solo varía la cantidad de campos. El funcionamiento de los componente está explicado en el código del componente desarrollo (desarrollos.component.ts)
