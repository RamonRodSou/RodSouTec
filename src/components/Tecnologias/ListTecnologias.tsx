import { Tecnologia } from '@domain/Tecnologia'
import { StringUtil } from '@utils/string'

export const listTecnologias: Tecnologia[] = [

    new Tecnologia('TYPESCRIPT', "LINGUAGEM", StringUtil.URL + "images/Icons//icons8-typescript-40.png"),
    new Tecnologia('JAVASCRIPT', "LINGUAGEM", StringUtil.URL + "images/Icons//icons8-javascript-40.png"),
    new Tecnologia('REACT', "FRAMEWORK", StringUtil.URL + "images/Icons/icons8-react-40.png"),
    new Tecnologia('NEXT', "FRAMEWORK", StringUtil.URL + "images/Icons/icons8-next-js-40.png"),
    new Tecnologia('ANGULA', "FRAMEWORK", StringUtil.URL + "images/Icons/icons8-angular-40.png"),
    new Tecnologia('NODE', "FRAMEWORK", StringUtil.URL + "images/Icons/icons8-node-js-40.png"),
    new Tecnologia('JAVA', "LINGUAGEM", StringUtil.URL + "images/Icons/icons8-java-40.png"),
    new Tecnologia('STRINGBOOT', "FRAMEWORK", StringUtil.URL + "images/Icons/icons8-spring-boot-40.png"),
    new Tecnologia('PYTHON', "LINGUAGEM", StringUtil.URL + "images/Icons/icons8-python-40.png"),
    new Tecnologia('MYSQL', "DADOS", StringUtil.URL + "images/Icons/icons8-mysql-40.png"),
    new Tecnologia('POSTGRES', "DADOS", StringUtil.URL + "images/Icons/icons8-postgres-40.png"),
    new Tecnologia('FIREBASE', "DADOS", StringUtil.URL + "images/Icons/icons8-firebase-40.png"),
    new Tecnologia('POSTMAN', "OUTROS", StringUtil.URL + "images/Icons/icons8-postman-inc-40.png"),
    new Tecnologia('DOCKER', "OUTROS", StringUtil.URL + "images/Icons/icons8-docker-40.png"),
    new Tecnologia('HTML', "LINGUAGEM", StringUtil.URL + "images/Icons/icons8-html-40.png"),
    new Tecnologia('CSS', "LINGUAGEM", StringUtil.URL + "images/Icons/icons8-css-40.png"),
    new Tecnologia('Sass', "ESTILO", StringUtil.URL + "images/Icons/icons8-sass-avatar-40.png"),
    new Tecnologia('Bootstrap', "ESTILO", StringUtil.URL + "images/Icons/icons8-bootstrap-40.png"),
    new Tecnologia('FIGMA', "UX", StringUtil.URL + "images/Icons/icons8-figma-40.png"),
    new Tecnologia('GIT', "OUTROS", StringUtil.URL + "images/Icons/icons8-git-40.png"),
    new Tecnologia('LINUX', "SO", StringUtil.URL + "images/Icons/icons8-linux-40.png"),
]
