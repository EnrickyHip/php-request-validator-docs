import Code from '@/components/Code';
import { DocumentationLayout } from '@/components/Layout';
import PageIndex from '@/components/PageIndex';
import { Article } from '@/components/UI/Article';
import { SimpleCode } from '@/components/UI/SimpleCode';
import Link from 'next/link';

export default function GettingErrors() {
  const sections = [
    {
      id: 'validation-requests',
      name: 'Validating Requests',
    },
    {
      id: 'getting-errors',
      name: 'Getting Errors',
    },
  ];

  return (
    <>
      <Article>
        <h1>Getting Errors</h1>
        <section id="validation-requests">
          <h2>Validating Requests</h2>
          <p>
            As told in <Link href="">Your First Validation</Link> page, you can check the validity of a request by just
            calling the method <SimpleCode>validate()</SimpleCode> in a <SimpleCode>RequestValidator</SimpleCode>{' '}
            object. Consider our <SimpleCode>UserRequest</SimpleCode> exemple:
          </p>
          <Code language="php">
            {`$data = [
    "name" => "Jon",
    "email" => "jon@email.com"
];

$userRequest = new UserRequest($data);
$isValid = $userRequest->validate();`}
          </Code>
          <p>
            <SimpleCode>validate()</SimpleCode> will simply return a <SimpleCode>bool</SimpleCode> value:
          </p>
          <Code language="php">{'var_dump($isValid); //bool(true)'}</Code>
        </section>
        <section id="getting-errors">
          <h2>Error Messages</h2>
          <p>
            You can simply get the error messages of your request by calling the method{' '}
            <SimpleCode>getErrors()</SimpleCode>. It will return an array of strings, which represent all caught errors:
          </p>
          <Code language="php">
            {`$data = [];

$userRequest = new UserRequest($data);
$errors = $userRequest->getErrors();

print_r($errors);`}
          </Code>
        </section>
        <p>
          As the user did not send any field, it will return an array with two error messages, one for each invalid
          field:
        </p>
        <Code language="markdown">
          {`Array
(
    [0] => field 'name' is required
    [1] => field 'email' is required
)`}
        </Code>
        <p>
          If all fields are valid, this method is going to return an empty array. It allows you to know the validity of
          your request checking if the error messages array is empty or not:
        </p>
        <Code language="php">
          {`$isValid = empty($userRequest->getErrors());
var_dump($isValid); // bool(false)`}
        </Code>
        <p>Another example of error messages, with invalid type and e-mail:</p>
        <Code language="php">{`$data = [
    "name" => 1,
    "email" => "invalid email"
];

$userRequest = new UserRequest($data);
$errors = $userRequest->getErrors();

print_r($errors);`}</Code>
        <p>Output:</p>
        <Code language="markdown">
          {`Array
(
    [0] => field 'name' is not of type 'string'
    [1] => field 'email' is not a valid email address
)`}
        </Code>
      </Article>
      <PageIndex sections={sections} />
    </>
  );
}

GettingErrors.getLayout = DocumentationLayout;
