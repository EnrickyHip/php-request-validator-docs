import PageIndex from '@/components/PageIndex';
import { Article } from '@/components/UI/Article';
import DocumentationPage from '@/templates/Docs';

export default function Introduction() {
  const sections = [
    {
      id: 'introduction',
      name: 'Introduction',
    },
    {
      id: 'features',
      name: 'Features',
    },
    {
      id: 'installation',
      name: 'Installation',
    },
  ];

  return (
    <DocumentationPage>
      <Article>
        <h1>PHP Request Validator</h1>
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            PHP Request Validator is a simple and flexible library for validating HTTP request body for PHP
            applications. It allows you to validate either JSON or form-data bodies specifing its expected fields and
            adding rules for them.
          </p>
          <p>
            It allows you to define which field should come in a request body and comes with many predefined rules to
            add for each field, but also suports the creation of their own specific validation rules.
          </p>
        </section>

        <section id="features">
          <h2>Features</h2>

          <ul>
            <li>
              <strong>Field validation: </strong>
              Validate individual fields such as text, number, and boolean input, checking for required values, lengths,
              and valid formats.
            </li>
            <li>
              <strong>Array validation:</strong> Ensure a field is an array and apply rules to be applied for all
              elements inside it.
            </li>
            <li>
              <strong>File validation:</strong> Validate uploaded files, checking for file types and lenghts.
            </li>
            <li>
              <strong>Type validation:</strong> Specify the data type of each field for type checking in strict or
              non-strict modes.
            </li>
            <li>
              <strong>Custom error messages:</strong> Create and customize your own error messages.
            </li>
            <li>
              <strong>Custom validation rules:</strong> Create specific rules to validate complex data patterns and
              unique application requirements.
            </li>
          </ul>
        </section>

        <section id="installation">
          <h2>Installation</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe officiis sint pariatur totam atque tempora
            facere nostrum ratione animi architecto obcaecati nemo odit ea ipsa rem corrupti, iure doloribus maiores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae sint repellat molestiae, ea cum sed
            reprehenderit dicta enim. Natus est officiis voluptate veniam ea nemo ullam corrupti, quidem expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe officiis sint pariatur totam atque tempora
            facere nostrum ratione animi architecto obcaecati nemo odit ea ipsa rem corrupti, iure doloribus maiores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae sint repellat molestiae, ea cum sed
            reprehenderit dicta enim. Natus est officiis voluptate veniam ea nemo ullam corrupti, quidem expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe officiis sint pariatur totam atque tempora
            facere nostrum ratione animi architecto obcaecati nemo odit ea ipsa rem corrupti, iure doloribus maiores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae sint repellat molestiae, ea cum sed
            reprehenderit dicta enim. Natus est officiis voluptate veniam ea nemo ullam corrupti, quidem expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe officiis sint pariatur totam atque tempora
            facere nostrum ratione animi architecto obcaecati nemo odit ea ipsa rem corrupti, iure doloribus maiores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae sint repellat molestiae, ea cum sed
            reprehenderit dicta enim. Natus est officiis voluptate veniam ea nemo ullam corrupti, quidem expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe officiis sint pariatur totam atque tempora
            facere nostrum ratione animi architecto obcaecati nemo odit ea ipsa rem corrupti, iure doloribus maiores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae sint repellat molestiae, ea cum sed
            reprehenderit dicta enim. Natus est officiis voluptate veniam ea nemo ullam corrupti, quidem expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe officiis sint pariatur totam atque tempora
            facere nostrum ratione animi architecto obcaecati nemo odit ea ipsa rem corrupti, iure doloribus maiores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae sint repellat molestiae, ea cum sed
            reprehenderit dicta enim. Natus est officiis voluptate veniam ea nemo ullam corrupti, quidem expedita!
          </p>
        </section>
      </Article>
      <PageIndex sections={sections} />
    </DocumentationPage>
  );
}
