function try()
{
    [[ $- = *e* ]]; SAVED_OPT_E=$?
    set +e
}

function throw()
{
    exit $1
}

function catch()
{
    export exception_code=$?
    (( $SAVED_OPT_E )) && set +e
    return $exception_code
}

export ERR_BAD=100

try
(
    read -p 'Migration name: ' NAME
    read -p 'Which database (web/ecommerce/dashboard)? ' DB

    case $DB in
        "web")
            DATASOURCE="./src/infra/database/web-presale/connection/default-connection.ts"
            MIGRATION_PATH="./src/infra/database/web-presale/migrations"
        ;;
        "ecommerce")
            DATASOURCE="./src/infra/database/e-commerce/connection/default-connection.ts"
            MIGRATION_PATH="./src/infra/database/e-commerce/migrations"
        ;;
        "dashboard")
            DATASOURCE="./src/infra/database/dashboard/connection/default-connection.ts"
            MIGRATION_PATH="./src/infra/database/dashboard/migrations"
        ;;
        *)
            echo "Invalid database option!"
            throw $ERR_BAD
        ;;
    esac    

    yarn typeorm migration:generate -d $DATASOURCE $MIGRATION_PATH/$NAME || throw $ERR_BAD
    # yarn migration:gen $NAME > /dev/null 2>&1 || throw $ERR_BAD
    # mv *.ts src/infra/database/migrations 
    # yarn migration:run

    echo "Migration was created successfully in $MIGRATION_PATH!"
)
catch || {
    case $exception_code in
        $ERR_BAD)
              echo -e '\033[05;31mNo changes in database schema were found\033[00;37m'
        ;;
        *)
            echo "Unknown error: $exit_code"
            throw $exit_code
        ;;
    esac
}