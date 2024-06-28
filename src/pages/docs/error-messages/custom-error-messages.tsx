import Code from '@/components/Code';
import { DocumentationLayout } from '@/components/Layout';
import PageIndex from '@/components/PageIndex';
import { Article } from '@/components/UI/Article';
import { SimpleCode } from '@/components/UI/SimpleCode';
import Link from 'next/link';

export default function GettingErrors() {
  const sections = [
    {
      id: 'customizing',
      name: 'Customizing',
    },
    {
      id: 'placeholders',
      name: 'Placeholders',
    },
    {
      id: 'string-representations',
      name: 'String Representations for Placeholders',
    },
  ];

  return (
    <>
      <Article>
        <h1>Custom Error Messages</h1>
        <section id="customizing">
          <h2>Customizing</h2>
          <p>
            PHP Request Validator has default errors messages for each rule. But it allows you to customize these
            messages to whatever you desire. Every rule has a parameter called <SimpleCode>?string $message</SimpleCode>
            , where you can send your customized messages.
          </p>
          <p>
            Let&apos;s consider a login request class, which requires a login and password, so both field need{' '}
            <SimpleCode>isRequired()</SimpleCode> rule. The default error message for this rule is{' '}
            <SimpleCode>&quot;field :name is required&quot;</SimpleCode>. If you want to change it, just pass your
            custom message as the first parameter:
          </p>
          <Code language="php">
            {`class LoginRequest extends RequestValidator
{
    public function rules(): array
    {
        $loginValidator = $this->validateField("login")
          ->isRequired("Please, send your login!")
          ->type(DataType::STRING);

        $passwordValidator = $this->validateField("password")
          ->isRequired("Password cannot be empty.")
          ->type(DataType::STRING)
          ->min(8);

          return [$loginValidator, $passwordValidator];
    }
}
      `}
          </Code>
          <p>If the user does not send the fields, these are going to be the error messages:</p>
          <Code language="markdown">
            {`Array
(
    [0] => Please, send your login!
    [1] => Password cannot be empty.
)`}
          </Code>
        </section>
        <p>
          Usually the <SimpleCode>$message</SimpleCode> parameter is the first optional parameter. Some rules requires
          at least one parameter to work, for exemple the <SimpleCode>type()</SimpleCode> and{' '}
          <SimpleCode>min()</SimpleCode> rules used in the exemple above. If you call <SimpleCode>type()</SimpleCode>,{' '}
          you need to specify the data type you want to receive in the first parameter, so in this case the{' '}
          <SimpleCode>$message</SimpleCode> parameter is the second one. The same for <SimpleCode>min()</SimpleCode>,
          which needs the min length value as the first parameter.
        </p>

        <Code language="php">{`$loginValidator->type(DataType::STRING, "Incorrect data type!");
$passwordValidator->min(8, "Password too small!");`}</Code>
        <p>To not make mistakes, always look which position is the message parameter.</p>
        <p>
          Another option is to use{' '}
          <a
            href="https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments"
            target="_blank"
            rel="noreferrer"
          >
            PHP Named Arguments:
          </a>
          <Code language="php">{'$loginValidator->type(DataType::STRING, message: "Incorrect data type!");'}</Code>
        </p>
        <section id="placeholders">
          <h2>Placeholders</h2>
          <p>
            Placeholders are dynamic values you can use when customizing an error message. These placeholders will be
            replaced to their specific value in the shown error messages. Every rule has two default placeholders:{' '}
            <SimpleCode>:name</SimpleCode> and <SimpleCode>:value</SimpleCode>.
          </p>
          <p>
            The placeholder <SimpleCode>:name</SimpleCode> refers to the attribute&apos;s name you pass as argument in
            the methods <SimpleCode>validateField()</SimpleCode>, <SimpleCode>validateArray()</SimpleCode> and{' '}
            <SimpleCode>validateFile()</SimpleCode>. The placeholder <SimpleCode>:value</SimpleCode> is the received
            value from the data array to be validated.
          </p>
          <p>Considering we are validating an email, this is how you can use placeholders:</p>
          <Code language="php">
            {`$emailValidator = $this->validateField("userEmail")
    ->isEmail("value :value is not a valid e-mail for field :name");
`}
          </Code>
          <Code language="php">
            {`$data = [
  "userEmail" => "invalid email"
];

$request = new EmailRequest($data);
$errors = $request->getErrors();

print_r($errors);`}
          </Code>
          <p>This is going to be the output:</p>
          <Code language="markdown">
            {`Array
(
    [0] => value 'invalid email' is not a valid e-mail for field 'userEmail'
)`}
          </Code>
          <p>
            The placeholders <SimpleCode>:name</SimpleCode> and <SimpleCode>:value</SimpleCode> are not the only
            placeholders PHP Request Validator offers. Some rules have their own specific placeholders. For exemple, in
            the rules <SimpleCode>min()</SimpleCode> and <SimpleCode>max()</SimpleCode> we have the placeholders{' '}
            <SimpleCode>:min</SimpleCode> and <SimpleCode>:max</SimpleCode> respectively. They will be replaced with de
            respective <SimpleCode>$min</SimpleCode> and <SimpleCode>$max</SimpleCode> parameters you send:
          </p>
          <Code language="php">
            {`$nameValidator = $this->validateField("name")
    ->max(10, "maximum length for :name is :max");

$passwordValidator = $this->validateField("password")
    ->min(8, "minimum length for :name is :min");
`}
          </Code>
          <p>Error messages:</p>
          <Code language="markdown">
            {`Array
(
    [0] => maximum length for 'name' is 10
    [1] => minimum length for 'password' is 8
)`}
          </Code>
          <p>
            As you can see, the placeholders <SimpleCode>:name</SimpleCode> and <SimpleCode>:value</SimpleCode> can be
            used on every rule. But somes also have their specific placeholders! But remember:{' '}
            <SimpleCode>:min</SimpleCode> only can be used on <SimpleCode>min()</SimpleCode> method. Same for the{' '}
            <SimpleCode>:max</SimpleCode> placeholder, which only can be used on the <SimpleCode>max()</SimpleCode>{' '}
            method. They <strong>cannot</strong> be used on other rules. Check the documentation of the native rules to
            check which placeholders each one accept.
          </p>
          <h3>About Custom Placeholders</h3>
          <p>
            At the moment is not possible to create custom placeholders to native rules of this library. But you can
            {
              //TODO lembrar de referenciar o link das custom rules
            }
            create your own placeholders when creating your own <Link href="">Custom Validation Rules</Link>.
          </p>
        </section>
        <section id="string-representations">
          <h2>String Representations for Placeholders</h2>
          <p>
            As you may have noticed, all error messages come as strings. However, not all placeholder values are going
            to be strings. The placeholder <SimpleCode>:value</SimpleCode> for exemple, can receive values of{' '}
            <strong>any</strong> data type. For this reason, these values should be converted to a string representation
            to replace the placeholder. PHP Request Validator make this automatically.
          </p>
          <p>This is a list of the conversions for each data type in PHP:</p>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <h3>strings</h3>
              <p>String values are enclosed within single quotes to represent a string:</p>

              <Code language="markdown">{`Array
(
    [0] => 'my value' is a string representation in error messages.
)`}</Code>
            </li>
            <li>
              <h3>numbers</h3>
              <p>
                Unlike strings, integers and floating numbers are not represented with quotes. They are just converted
                to strings and concatenated within the message:
              </p>
              <Code language="markdown">{'[0] => 1 is an integer representation in error messages.'}</Code>
              <Code language="markdown">{'[0] => 1.1 is a float representation in error messages.'}</Code>
            </li>
            <li>
              <h3>booleans:</h3>
              <p>
                Booleans are simply coverted to <SimpleCode>true</SimpleCode> or <SimpleCode>false</SimpleCode>
              </p>
              <Code language="markdown">{'[0] => true is a boolean value.'}</Code>
              <Code language="markdown">{'[0] => false is a boolean value.'}</Code>
            </li>
          </ul>
          <p>
            For arrays, objects, null, resources or unknown types, PHP Request Validator does not show its elements,
            properties or other details. These are the values that replace the placeholders:
          </p>
          <ul>
            <li>
              <strong>array</strong>: <SimpleCode>[array]</SimpleCode>,
            </li>
            <li>
              <strong>object</strong>: <SimpleCode>{'{object}'}</SimpleCode>,
            </li>
            <li>
              <strong>NULL</strong>: <SimpleCode>{'null'}</SimpleCode>,
            </li>
            <li>
              <strong>unknown type</strong>: <SimpleCode>{'unknown'}</SimpleCode>,
            </li>
            <li>
              <strong> resource, resource (closed)</strong>: <SimpleCode>{'{resource}'}</SimpleCode>
            </li>
          </ul>
        </section>
      </Article>
      <PageIndex sections={sections} />
    </>
  );
}

GettingErrors.getLayout = DocumentationLayout;
