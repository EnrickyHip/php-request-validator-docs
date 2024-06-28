import Code from '@/components/Code';
import { DocumentationLayout } from '@/components/Layout';
import PageIndex from '@/components/PageIndex';
import { Article } from '@/components/UI/Article';
import { SimpleCode } from '@/components/UI/SimpleCode';

//TODO finalizar este arquivo
export default function FirstValidation() {
  const sections = [
    {
      id: 'receiving-data',
      name: 'Receiving Data',
    },
    {
      id: 'chaining-rules',
      name: 'Chaining Rules',
    },
    {
      id: 'validate',
      name: 'Validate',
    },
  ];

  const dataVarDump = `array(2) {
    ["name"]=>
    string(3) "Jon"
    ["email"]=>
    string(13) "jon@email.com"
    ["age"]=>
    int(25)
  }`;

  return (
    <>
      <Article>
        <h1>Your First Validation</h1>
        <section id="receiving-data">
          <h2>Receiving data</h2>
          <p>Typically, PHP files can obtain data from an HTTP request in two different ways. These are:</p>
          <h3>Form Data</h3>
          <p>
            When data is send via Form Data in the request body, it is accessible through the&nbsp;
            <SimpleCode>$_POST</SimpleCode> array.
          </p>
          <Code language="php">var_dump($_POST);</Code>
          <p>This will print your request body:</p>
          <Code language="markdown">{dataVarDump}</Code>
          <h3>JSON</h3>
          <p>
            When sending data in JSON format in the body of an HTTP request, PHP can receive it calling the function{' '}
            <SimpleCode>file_get_contents(&quot;php://input&quot;)</SimpleCode> and decoding it with&nbsp;
            <SimpleCode>json_decode()</SimpleCode>. This will also print your request body:
          </p>
          <Code language="php">
            {`$data = json_decode(file_get_contents("php://input"), true);
var_dump($data);`}
          </Code>

          <p>
            PHP Request Validator can handle with both methods. Actually, it can validate <strong>any</strong> php
            associative array. So you can just create your own array of data and validate it. But it should be an
            associative array, with a key-value pair:
          </p>
          <Code language="php">
            {`$data = [
  "name" => "Jon",
  "email" => "jon@email.com",
  "age" => 25
];`}
          </Code>
        </section>
        <section id="chaining-rules">
          <h2>Chaining Rules</h2>
          <p>
            As mentioned in the&nbsp;
            <a href="/docs/introduction" target="_blank">
              Introduction
            </a>
            &nbsp;section, this library uses a design pattern called&nbsp;
            <a href="https://en.wikipedia.org/wiki/Method_chaining" target="_blank" rel="noreferrer">
              Method Chaining
            </a>
            . It allows multiple method calls to be chained together in a single statement. In the context of PHP
            Request Validator, method chaining offers a convenient way to apply multiple validation rules to a single
            field. As every method returns the same object reference, its not necessary to make multiple statements.
          </p>
          <p>
            Let&apos;s create validation rule for Jon&apos;s data mentioned early. For this, you must create a new class
            and inherit from <SimpleCode>Enricky\RequestValidator\Abstract\RequestValidator</SimpleCode>.
          </p>
          <Code language="php">
            {`use Enricky\\RequestValidator\\Abstract\\RequestValidator;

class UserRequest extends RequestValidator
{

}`}
          </Code>
          <p>
            {
              //TODO lembrar de colocar links e referências para o que ser falado nessa página
            }
            <SimpleCode>RequestValidator</SimpleCode> is an abstract class. In this class you have to implement a method
            called <SimpleCode>rules()</SimpleCode>. This method should return an array of&nbsp;
            <a href="/docs/validators">Validators</a>. There are validators for fields, files and arrays. In this case,
            all three properties of Jon&apos;s are just simple fields. So in this case, we should use field validators.
            To create a field validator, you can call the <SimpleCode>$this-&#62;validateField()</SimpleCode>, passing
            the name of the property as the first parameter:
          </p>
          <Code language="php">{`class UserRequest extends RequestValidator
{
    public function rules(): array
    {
        $nameValidator = $this->validateField("name");
    }
}
`}</Code>
          <h3>Require a Field</h3>
          <p>
            <SimpleCode>$this-&#62;validateField()</SimpleCode> returns a instance of{' '}
            <SimpleCode>FieldValidator</SimpleCode>, which has a bounch of methods you can use to apply rules for your
            field. All these methods return the same object instance, so you can apply rules by just chaining methods in
            this object. There comes the chaining rules! For exempple, if you want the field name to be required, you
            can simply call the method <SimpleCode>isRequired()</SimpleCode>:
          </p>
          <Code language="php">{`class UserRequest extends RequestValidator
{
    public function rules(): array
    {
        $nameValidator = $this->validateField("name")->isRequired();
    }
}
`}</Code>
          <p>
            This will add a rule that will check if the field <SimpleCode>name</SimpleCode> was sent or not in the
            request. The field will not be considered as sent if the key does not exists in the request array or its
            value is either <SimpleCode>null</SimpleCode> or one of the strings{' '}
            <SimpleCode>&quot;null&quot;</SimpleCode>, <SimpleCode>&quot;&quot;</SimpleCode> or{' '}
            <SimpleCode>&quot;undefined&quot;</SimpleCode>.
          </p>

          <h3>Define Data Types</h3>
          <p>
            You can define which Data Type you expect in your fields just calling the method{' '}
            <SimpleCode>type()</SimpleCode> and passing the type as parameter. You can define the type using strings or
            the <SimpleCode>DataType</SimpleCode> enum. The advantage of using the enum is that you can prevent typos,
            but using strings can be more practical. It&apos;s your choice.
          </p>
          <Code language="php">{`use Enricky\\RequestValidator\\Types\\DataType;

class UserRequest extends RequestValidator
{
    public function rules(): array
    {
        $nameValidator = $this->validateField("name")
          ->isRequired()
          ->type(DataType::STRING);
    }
}

`}</Code>
        </section>
        <section id="validate">
          <h2>Validate</h2>
        </section>
      </Article>
      <PageIndex sections={sections} />
    </>
  );
}

FirstValidation.getLayout = DocumentationLayout;
