'use client';

import { useEffect, useRef } from 'react';

export default function ZohoLeadForm() {
    const originRef = useRef<HTMLInputElement | null>(null);
    const utmSourceRef = useRef<HTMLInputElement | null>(null);
    const utmMediumRef = useRef<HTMLInputElement | null>(null);
    const utmCampaignRef = useRef<HTMLInputElement | null>(null);
    const utmContentRef = useRef<HTMLInputElement | null>(null);
    const utmTermRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        // set Origin_Page value client-side
        if (originRef.current) originRef.current.value = window.location.href;

        // Read UTM parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        const utmParams = {
            source: urlParams.get('utm_source') || '',
            medium: urlParams.get('utm_medium') || '',
            campaign: urlParams.get('utm_campaign') || '',
            content: urlParams.get('utm_content') || '',
            term: urlParams.get('utm_term') || '',
        };

        // Set UTM values in form fields
        if (utmSourceRef.current) utmSourceRef.current.value = utmParams.source;
        if (utmMediumRef.current) utmMediumRef.current.value = utmParams.medium;
        if (utmCampaignRef.current) utmCampaignRef.current.value = utmParams.campaign;
        if (utmContentRef.current) utmContentRef.current.value = utmParams.content;
        if (utmTermRef.current) utmTermRef.current.value = utmParams.term;

        // load Zoho analytics script once
        const id = 'wf_anal_custom';
        if (!document.getElementById(id)) {
            const s = document.createElement('script');
            s.id = id;
            s.src = 'https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=5a38e2fdd3b4e59c85f88f3b2a6f087a765075172dc30dd8c92d2a7330f6ddeac77558ed5b7822ebce8b95087fbdf49agida30e104dc4b04d1d65005037f690631c40363807b743b96e3430c23f0b83124bgid8ffcedf9517667e7dca4f8a85c0a00138d7fd38195dab756558b58d4bdbcdd33gidebf9fdc53500a5235e398eb012d5a3d82feba619d3e6e5f91f1e67ca04527f72&tw=c69e8300098aa2f49fc65572bea928cf2653146035e09dc6dbc4f8d606eddee2';
            document.body.appendChild(s);
        }
    }, []);

    return (
        <form
            id="webform6939572000000572359"
            name="WebToLeads6939572000000572359"
            action="https://crm.zoho.com/crm/WebToLeadForm"
            method="POST"
            acceptCharset="UTF-8"
            className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 md:p-8"
        >
            {/* --- REQUIRED ZOHO HIDDEN FIELDS (DO NOT CHANGE) --- */}
            <input type="text" name="xnQsjsdp" defaultValue="6bad4fdfbe69bbfa3fd6108dd3c414f3dc8394f7bcd8673eb69dd5eefd192fd9" style={{ display: 'none' }} />
            <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
            <input type="text" name="xmIwtLD" defaultValue="9eac6a51a11840d32d5d40b2528e95413af23a5f51dd9d7d863aa7e81200075385d8f87075a23d0b21c4ab19759e3619" style={{ display: 'none' }} />
            <input type="text" name="actionType" defaultValue="TGVhZHM=" style={{ display: 'none' }} />
            <input type="text" name="returnURL" defaultValue="https://chrisford.site/thanks" style={{ display: 'none' }} />

            {/* --- OUR UTM + ORIGIN HIDDEN FIELDS (custom Lead fields in Zoho) --- */}
            <input type="hidden" name="UTM_Source" ref={utmSourceRef} defaultValue="" />
            <input type="hidden" name="UTM_Medium" ref={utmMediumRef} defaultValue="" />
            <input type="hidden" name="UTM_Campaign" ref={utmCampaignRef} defaultValue="" />
            <input type="hidden" name="UTM_Content" ref={utmContentRef} defaultValue="" />
            <input type="hidden" name="UTM_Term" ref={utmTermRef} defaultValue="" />
            <input type="hidden" name="Origin_Page" ref={originRef} defaultValue="" />

            {/* Honeypot from Zoho */}
            <input type="text" name="aG9uZXlwb3Q" defaultValue="" style={{ display: 'none' }} />

            {/* --- Visible fields (match our site's classes) --- */}
            <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                    <label htmlFor="Email" className="mb-2 block text-gray-800 dark:text-gray-200">
                        Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="Email"
                        name="Email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="you@domain.com"
                    />
                </div>
                <div>
                    <label htmlFor="First_Name" className="mb-2 block text-gray-800 dark:text-gray-200">
                        First name<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="First_Name"
                        name="First Name"
                        type="text"
                        required
                        autoComplete="given-name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Chris"
                    />
                </div>
                <div>
                    <label htmlFor="Last_Name" className="mb-2 block text-gray-800 dark:text-gray-200">
                        Last name<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="Last_Name"
                        name="Last Name"
                        type="text"
                        required
                        autoComplete="family-name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Ford"
                    />
                </div>
            </div>

            <div className="mt-6">
                <button type="submit" id="formsubmit" className="w-full rounded-xl bg-primary-600 px-5 py-3 text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 md:w-auto">
                    Get Early Access
                </button>
            </div>

            <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                No spam. Unsubscribe any time.
            </p>
        </form>
    );
}
