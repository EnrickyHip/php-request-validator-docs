import { SubMenu } from '../SubMenu';
import { AsideContainer, MenuList, SideBarNav } from './styled';
import { MenuItem } from '../MenuItem';
import { Tab } from '../Layout';
import { useRouter } from 'next/router';

export interface SideBarProps {
  tab: Tab;
}

export function SideBar({ tab }: SideBarProps) {
  const router = useRouter();

  return (
    <AsideContainer>
      <SideBarNav>
        <MenuList>
          {tab === 'docs' && (
            <>
              <SubMenu title="Getting Started">
                <MenuItem $active={router.pathname === '/docs/introduction'} href="/docs/introduction">
                  Introduction
                </MenuItem>
                <MenuItem $active={router.pathname === '/docs/first-validation'} href="/docs/first-validation">
                  Your First Validation
                </MenuItem>
              </SubMenu>
              <SubMenu title="Error Messages">
                <MenuItem
                  $active={router.pathname === '/docs/error-messages/getting-errors'}
                  href="/docs/error-messages/getting-errors"
                >
                  Getting Errors
                </MenuItem>
                <MenuItem
                  $active={router.pathname === '/docs/error-messages/custom-error-messages'}
                  href="/docs/error-messages/custom-error-messages"
                >
                  Custom Error Messages
                </MenuItem>
              </SubMenu>
              <SubMenu title="Basic Rules">
                <></>
              </SubMenu>
              <SubMenu title="Field Validation">
                <MenuItem
                  $active={router.pathname === '/docs/field-validation/creating-a-field-validator'}
                  href="/docs/field-validation/creating-a-field-validator"
                >
                  Creating a Field Validator
                </MenuItem>
              </SubMenu>
            </>
          )}
        </MenuList>
      </SideBarNav>
    </AsideContainer>
  );
}
