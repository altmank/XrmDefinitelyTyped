﻿/// <reference path="..\xrm.d.ts" />
declare namespace Xrm {

    interface context {
        /**
         * Returns the language code identifier (LCID) value that represents the base language for the organization.
         */
        getOrgLcid(): number;

        /**
         * Returns the unique text value of the organization?s name.
         */
        getOrgUniqueName(): string;

        /**
         * Returns a dictionary object of key value pairs that represent the query string arguments that were passed to the page.
         */
        getQueryStringParameters(): any;

        /**
         * Returns the GUID of the SystemUser.Id value for the current user.
         */
        getUserId(): string;

        /**
         * Returns the LCID value that represents the provisioned language that the user selected as their preferred language.
         */
        getUserLcid(): number;

        /**
         * Returns an array of strings that represent the GUID values of each of the security roles that the user is associated with or any teams that the user is associated with.
         */
        getUserRoles(): string[];
    }

    /**
     * Interface for the entity on a form.
     */
    interface PageEntity<T extends AttributeCollectionBase> {

        /**
         * This is the equivalent of using the "Save and Close" command.
         */
        save(type: "saveandclose"): boolean;

        /**
         * This is the equivalent of using the "Save and New" command.
         */
        save(type: "saveandnew"): boolean;

        /**
         * Saves the record synchronously and performs the command according to the type given.
         */
        save(type: string): boolean;
    }

    /**
     * Interface for the Xrm.Utility functionality.
     */
    interface Utility {

        /**
         * Opens an entity form for a new or existing entity record using the options you set as parameters.
         *
         * @param name The logical name of the entity.
         * @param id The string representation of a unique identifier or the record to open in the form. If not set, a form to create a new record is opened.
         * @param parameters A dictionary object that passes extra query string parameters to the form. Invalid query string parameters will cause an error.
         * @param windowOptions You can choose to open a form in a new window by passing a dictionary object with a boolean openInNewWindow property set to true.
         */
        openEntityForm(name: string, id?: string, parameters?: any, windowOptions?: WindowOptions): void;

        /**
         * Opens an HTML web resource.
         * 
         * @param webResourceName The name of the HTML web resource to open.
         * @param webResourceData Data to be passed into the data parameter.
         * @param width The width of the window to open in pixels.
         * @param height The height of the window to open in pixels.
         */
        openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window;
    }
}
