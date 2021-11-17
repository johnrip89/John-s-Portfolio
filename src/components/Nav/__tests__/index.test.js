import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const mockProjectsSelected = jest.fn();
const mockSetProjectsSelected = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();
const mockResumeSelected = jest.fn();
const mockSetResumeSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav
            setContactSelected={mockSetContactSelected}
            projectsSelected={mockProjectsSelected}
            setProjectsSelected={mockSetProjectsSelected}
            resumeSelected={mockResumeSelected}
            setResumeSelected={mockSetResumeSelected}
        />);
    })

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            projectsSelected={mockProjectsSelected}
            setProjectsSelected={mockSetProjectsSelected}
            resumeSelected={mockResumeSelected}
            setResumeSelected={mockSetResumeSelected}
        />);

        expect(asFragment()).toMatchSnapshot();
    });
})

describe('onClick events', () => {
    it('calls the click handler when clicked', () => {
        const { getByText } = render(<Nav
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            projectsSelected={mockProjectsSelected}
            setProjectsSelected={mockSetProjectsSelected}
            resumeSelected={mockResumeSelected}
            setResumeSelected={mockSetResumeSelected}
        />);
        fireEvent.click(getByText('About'))
        fireEvent.click(getByText('Contact'))
        fireEvent.click(getByText('Resume'))
        fireEvent.click(getByText('Projects'))

        expect(mockSetContactSelected).toHaveBeenCalledTimes(3);
    });
})