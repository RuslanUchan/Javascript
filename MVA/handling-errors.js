/* let a = 7 * undefined / "panama";
console.log(a); */

/* function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('If the previous line of code throws an exception you\'ll never see this.');
} */

// beforeTryCatch();

/* function afterTryCatch() {
    try {
        
        let obj = undefined;
        console.log(obj.b);
        console.log('If the previous line of code throws an exception you\'ll never see this.');        

    } catch (error) {
        
        console.log('I caught an exception: ' + error.message);

    } finally {
        console.log('This will happen no matter what.');
    }

    console.log('My application is still running!');
}

afterTryCatch(); */

function performCaculation(obj) {
    if (!obj.hasOwnProperty('b')) {
        throw new Error('Object missing property');
    }
    // continue with calculation w/ obj.b
    return 6;
}

function performHigherLevelOperation() {
    let obj = {};
    let value = 0;
    try {
        value = performCaculation(obj);
    } catch (error) {
        console.log(error.message);
    }

    if (value == 0) {
        // contingency
        // retry logic
    }
}

performHigherLevelOperation();
// SIG // Begin signature block
// SIG // MIIdkgYJKoZIhvcNAQcCoIIdgzCCHX8CAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFF1NMUIstbMX
// SIG // xnrzxjW8o9yVfK0uoIIYVDCCBMIwggOqoAMCAQICEzMA
// SIG // AADBCfgCQbtNqtwAAAAAAMEwDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTE2MDkwNzE3
// SIG // NTg1MFoXDTE4MDkwNzE3NTg1MFowgbIxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xDDAKBgNVBAsTA0FPQzEnMCUGA1UECxMe
// SIG // bkNpcGhlciBEU0UgRVNOOjEyRTctMzA2NC02MTEyMSUw
// SIG // IwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2
// SIG // aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
// SIG // AQEAp0Mf+ZcpfMlCrDgnu4KGgUm2GURi6qgZK4CoavHR
// SIG // /DjNNivm15I5AQXN6MZC8hz8BTeQVKUEGPaxBssD0UDX
// SIG // WbPjkVrGVOQ0Y6vqZhSAfvJjA5fQ6A4fTx59HfpKiwo0
// SIG // 6c3jCjGNzhSwgbWTNJlJgMhRrQ2wGk/lf+aUe0xXFqIW
// SIG // r6zTRREQ2xS9Yd4N92kTdiEuSNA0SEjWXvqOQL3nWWvg
// SIG // SwAxaQXoJx8nYW6JqY4YOaB+z84h2GCp0mQf1bRg/aD3
// SIG // LXvHy+ca980P7/FW0C0qOHdmO8gzoFGnjIILg1hUJPwU
// SIG // 8iIQDItlmC0a9SM41Fmn1Fl60QHo3B+PyxsRnwIDAQAB
// SIG // o4IBCTCCAQUwHQYDVR0OBBYEFOVnNlVfsPlSxaxL1m41
// SIG // v4g6rUWvMB8GA1UdIwQYMBaAFCM0+NlSRnAK7UD7dvuz
// SIG // K7DDNbMPMFQGA1UdHwRNMEswSaBHoEWGQ2h0dHA6Ly9j
// SIG // cmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3Rz
// SIG // L01pY3Jvc29mdFRpbWVTdGFtcFBDQS5jcmwwWAYIKwYB
// SIG // BQUHAQEETDBKMEgGCCsGAQUFBzAChjxodHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29m
// SIG // dFRpbWVTdGFtcFBDQS5jcnQwEwYDVR0lBAwwCgYIKwYB
// SIG // BQUHAwgwDQYJKoZIhvcNAQEFBQADggEBADQ4Cyl0aMHv
// SIG // zc7uMd73dOwRtrFypd7mCIEAwa8PNwFidJ2deVcC9Ch3
// SIG // uIRJIzVZ9ev49KjgA3ZeQEtCHpmEWd0aPUHsX+I4IJQF
// SIG // 15vpPm2x5GHzmd4PqRYbOfjBer2OqVgeyB5pCYc7NTh5
// SIG // 9axTQTWFTtdg4bj2GK//+yiDedo3eiPOqMjPuu1dVvJL
// SIG // vErG5z89oAQ6GCHh5M2kmQqF9votni+RC93fExF16io5
// SIG // 8YecRHHT8wblZ7d1SLvEo1ncsv7pU8wcvo0RS3E8nxkJ
// SIG // tfZpXq1nMH1du9Vlm4U6YMQELoMvaOjzOA0fRyBM+r0V
// SIG // GMiH19PRcaF+aRDUxs7LCsgwggYBMIID6aADAgECAhMz
// SIG // AAAAxOmJ+HqBUOn/AAAAAADEMA0GCSqGSIb3DQEBCwUA
// SIG // MH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xKDAmBgNVBAMTH01p
// SIG // Y3Jvc29mdCBDb2RlIFNpZ25pbmcgUENBIDIwMTEwHhcN
// SIG // MTcwODExMjAyMDI0WhcNMTgwODExMjAyMDI0WjB0MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMR4wHAYDVQQDExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24wggEiMA0GCSqGSIb3DQEBAQUA
// SIG // A4IBDwAwggEKAoIBAQCIirgkwwePmoB5FfwmYPxyiCz6
// SIG // 9KOXiJZGt6PLX4kvOjMuHpF4+nypH4IBtXrLGrwDykbr
// SIG // xZn3+wQd8oUK/yJuofJnPcUnGOUoH/UElEFj7OO6FYzt
// SIG // E5o13jhwVG877K1FCTBJwb6PMJkMy3bJ93OVFnfRi7uU
// SIG // xwiFIO0eqDXxccLgdABLitLckevWeP6N+q1giD29uR+u
// SIG // Ype/xYSxkK7WryvTVPs12s1xkuYe/+xxa8t/CHZ04BBR
// SIG // SNTxAMhITKMHNeVZDf18nMjmWuOF9daaDx+OpuSEF8HW
// SIG // yp8dAcf9SKcTkjOXIUgy+MIkogCyvlPKg24pW4HvOG6A
// SIG // 87vsEwvrAgMBAAGjggGAMIIBfDAfBgNVHSUEGDAWBgor
// SIG // BgEEAYI3TAgBBggrBgEFBQcDAzAdBgNVHQ4EFgQUy9Zi
// SIG // hM9gOer/Z8Jc0si7q7fDE5gwUgYDVR0RBEswSaRHMEUx
// SIG // DTALBgNVBAsTBE1PUFIxNDAyBgNVBAUTKzIzMDAxMitj
// SIG // ODA0YjVlYS00OWI0LTQyMzgtODM2Mi1kODUxZmEyMjU0
// SIG // ZmMwHwYDVR0jBBgwFoAUSG5k5VAF04KqFzc3IrVtqMp1
// SIG // ApUwVAYDVR0fBE0wSzBJoEegRYZDaHR0cDovL3d3dy5t
// SIG // aWNyb3NvZnQuY29tL3BraW9wcy9jcmwvTWljQ29kU2ln
// SIG // UENBMjAxMV8yMDExLTA3LTA4LmNybDBhBggrBgEFBQcB
// SIG // AQRVMFMwUQYIKwYBBQUHMAKGRWh0dHA6Ly93d3cubWlj
// SIG // cm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWljQ29kU2ln
// SIG // UENBMjAxMV8yMDExLTA3LTA4LmNydDAMBgNVHRMBAf8E
// SIG // AjAAMA0GCSqGSIb3DQEBCwUAA4ICAQAGFh/bV8JQyCNP
// SIG // olF41+34/c291cDx+RtW7VPIaUcF1cTL7OL8mVuVXxE4
// SIG // KMAFRRPgmnmIvGar27vrAlUjtz0jeEFtrvjxAFqUmYoc
// SIG // zAmV0JocRDCppRbHukdb9Ss0i5+PWDfDThyvIsoQzdiC
// SIG // EKk18K4iyI8kpoGL3ycc5GYdiT4u/1cDTcFug6Ay67Sz
// SIG // L1BWXQaxFYzIHWO3cwzj1nomDyqWRacygz6WPldJdyOJ
// SIG // /rEQx4rlCBVRxStaMVs5apaopIhrlihv8cSu6r1FF8xi
// SIG // ToG1VBpHjpilbcBuJ8b4Jx/I7SCpC7HxzgualOJqnWmD
// SIG // oTbXbSD+hdX/w7iXNgn+PRTBmBSpwIbM74LBq1UkQxi1
// SIG // SIV4htD50p0/GdkUieeNn2gkiGg7qceATibnCCFMY/2c
// SIG // kxVNM7VWYE/XSrk4jv8u3bFfpENryXjPsbtrj4Nsh3Kq
// SIG // 6qX7n90a1jn8ZMltPgjlfIOxrbyjunvPllakeljLEkdi
// SIG // 0iHv/DzEMQv3Lz5kpTdvYFA/t0SQT6ALi75+WPbHZ4dh
// SIG // 256YxMiMy29H4cAulO2x9rAwbexqSajplnbIvQjE/jv1
// SIG // rnM3BrJWzxnUu/WUyocc8oBqAU+2G4Fzs9NbIj86WBjf
// SIG // iO5nxEmnL9wliz1e0Ow0RJEdvJEMdoI+78TYLaEEAo5I
// SIG // +e/dAs8DojCCBgcwggPvoAMCAQICCmEWaDQAAAAAABww
// SIG // DQYJKoZIhvcNAQEFBQAwXzETMBEGCgmSJomT8ixkARkW
// SIG // A2NvbTEZMBcGCgmSJomT8ixkARkWCW1pY3Jvc29mdDEt
// SIG // MCsGA1UEAxMkTWljcm9zb2Z0IFJvb3QgQ2VydGlmaWNh
// SIG // dGUgQXV0aG9yaXR5MB4XDTA3MDQwMzEyNTMwOVoXDTIx
// SIG // MDQwMzEzMDMwOVowdzELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEh
// SIG // MB8GA1UEAxMYTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENB
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // n6Fssd/bSJIqfGsuGeG94uPFmVEjUK3O3RhOJA/u0afR
// SIG // TK10MCAR6wfVVJUVSZQbQpKumFwwJtoAa+h7veyJBw/3
// SIG // DgSY8InMH8szJIed8vRnHCz8e+eIHernTqOhwSNTyo36
// SIG // Rc8J0F6v0LBCBKL5pmyTZ9co3EZTsIbQ5ShGLieshk9V
// SIG // UgzkAyz7apCQMG6H81kwnfp+1pez6CGXfvjSE/MIt1Nt
// SIG // UrRFkJ9IAEpHZhEnKWaol+TTBoFKovmEpxFHFAmCn4Tt
// SIG // VXj+AZodUAiFABAwRu233iNGu8QtVJ+vHnhBMXfMm987
// SIG // g5OhYQK1HQ2x/PebsgHOIktU//kFw8IgCwIDAQABo4IB
// SIG // qzCCAacwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU
// SIG // IzT42VJGcArtQPt2+7MrsMM1sw8wCwYDVR0PBAQDAgGG
// SIG // MBAGCSsGAQQBgjcVAQQDAgEAMIGYBgNVHSMEgZAwgY2A
// SIG // FA6sgmBAVieX5SUT/CrhClOVWeSkoWOkYTBfMRMwEQYK
// SIG // CZImiZPyLGQBGRYDY29tMRkwFwYKCZImiZPyLGQBGRYJ
// SIG // bWljcm9zb2Z0MS0wKwYDVQQDEyRNaWNyb3NvZnQgUm9v
// SIG // dCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHmCEHmtFqFKoKWt
// SIG // THNY9AcTLmUwUAYDVR0fBEkwRzBFoEOgQYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVj
// SIG // dHMvbWljcm9zb2Z0cm9vdGNlcnQuY3JsMFQGCCsGAQUF
// SIG // BwEBBEgwRjBEBggrBgEFBQcwAoY4aHR0cDovL3d3dy5t
// SIG // aWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNyb3NvZnRS
// SIG // b290Q2VydC5jcnQwEwYDVR0lBAwwCgYIKwYBBQUHAwgw
// SIG // DQYJKoZIhvcNAQEFBQADggIBABCXisNcA0Q23em0rXfb
// SIG // znlRTQGxLnRxW20ME6vOvnuPuC7UEqKMbWK4VwLLTiAT
// SIG // UJndekDiV7uvWJoc4R0Bhqy7ePKL0Ow7Ae7ivo8KBciN
// SIG // SOLwUxXdT6uS5OeNatWAweaU8gYvhQPpkSokInD79vzk
// SIG // eJkuDfcH4nC8GE6djmsKcpW4oTmcZy3FUQ7qYlw/FpiL
// SIG // ID/iBxoy+cwxSnYxPStyC8jqcD3/hQoT38IKYY7w17gX
// SIG // 606Lf8U1K16jv+u8fQtCe9RTciHuMMq7eGVcWwEXChQO
// SIG // 0toUmPU8uWZYsy0v5/mFhsxRVuidcJRsrDlM1PZ5v6oY
// SIG // emIp76KbKTQGdxpiyT0ebR+C8AvHLLvPQ7Pl+ex9teOk
// SIG // qHQ1uE7FcSMSJnYLPFKMcVpGQxS8s7OwTWfIn0L/gHkh
// SIG // gJ4VMGboQhJeGsieIiHQQ+kr6bv0SMws1NgygEwmKkgk
// SIG // X1rqVu+m3pmdyjpvvYEndAYR7nYhv5uCwSdUtrFqPYmh
// SIG // dmG0bqETpr+qR/ASb/2KMmyy/t9RyIwjyWa9nR2HEmQC
// SIG // PS2vWY+45CHltbDKY7R4VAXUQS5QrJSwpXirs6CWdRrZ
// SIG // kocTdSIvMqgIbqBbjCW/oO+EyiHW6x5PyZruSeD3AWVv
// SIG // iQt9yGnI5m7qp5fOMSn/DsVbXNhNG6HY+i+ePy5VFmvJ
// SIG // E6P9MIIHejCCBWKgAwIBAgIKYQ6Q0gAAAAAAAzANBgkq
// SIG // hkiG9w0BAQsFADCBiDELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEy
// SIG // MDAGA1UEAxMpTWljcm9zb2Z0IFJvb3QgQ2VydGlmaWNh
// SIG // dGUgQXV0aG9yaXR5IDIwMTEwHhcNMTEwNzA4MjA1OTA5
// SIG // WhcNMjYwNzA4MjEwOTA5WjB+MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBTaWdu
// SIG // aW5nIFBDQSAyMDExMIICIjANBgkqhkiG9w0BAQEFAAOC
// SIG // Ag8AMIICCgKCAgEAq/D6chAcLq3YbqqCEE00uvK2WCGf
// SIG // Qhsqa+laUKq4BjgaBEm6f8MMHt03a8YS2AvwOMKZBrDI
// SIG // OdUBFDFC04kNeWSHfpRgJGyvnkmc6Whe0t+bU7IKLMOv
// SIG // 2akrrnoJr9eWWcpgGgXpZnboMlImEi/nqwhQz7NEt13Y
// SIG // xC4Ddato88tt8zpcoRb0RrrgOGSsbmQ1eKagYw8t00CT
// SIG // +OPeBw3VXHmlSSnnDb6gE3e+lD3v++MrWhAfTVYoonpy
// SIG // 4BI6t0le2O3tQ5GD2Xuye4Yb2T6xjF3oiU+EGvKhL1nk
// SIG // kDstrjNYxbc+/jLTswM9sbKvkjh+0p2ALPVOVpEhNSXD
// SIG // OW5kf1O6nA+tGSOEy/S6A4aN91/w0FK/jJSHvMAhdCVf
// SIG // GCi2zCcoOCWYOUo2z3yxkq4cI6epZuxhH2rhKEmdX4ji
// SIG // JV3TIUs+UsS1Vz8kA/DRelsv1SPjcF0PUUZ3s/gA4bys
// SIG // AoJf28AVs70b1FVL5zmhD+kjSbwYuER8ReTBw3J64HLn
// SIG // JN+/RpnF78IcV9uDjexNSTCnq47f7Fufr/zdsGbiwZeB
// SIG // e+3W7UvnSSmnEyimp31ngOaKYnhfsi+E11ecXL93KCjx
// SIG // 7W3DKI8sj0A3T8HhhUSJxAlMxdSlQy90lfdu+HggWCwT
// SIG // XWCVmj5PM4TasIgX3p5O9JawvEagbJjS4NaIjAsCAwEA
// SIG // AaOCAe0wggHpMBAGCSsGAQQBgjcVAQQDAgEAMB0GA1Ud
// SIG // DgQWBBRIbmTlUAXTgqoXNzcitW2oynUClTAZBgkrBgEE
// SIG // AYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8EBAMCAYYw
// SIG // DwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBRyLToC
// SIG // MZBDuRQFTuHqp8cx0SOJNDBaBgNVHR8EUzBRME+gTaBL
// SIG // hklodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpL2Ny
// SIG // bC9wcm9kdWN0cy9NaWNSb29DZXJBdXQyMDExXzIwMTFf
// SIG // MDNfMjIuY3JsMF4GCCsGAQUFBwEBBFIwUDBOBggrBgEF
// SIG // BQcwAoZCaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
// SIG // aS9jZXJ0cy9NaWNSb29DZXJBdXQyMDExXzIwMTFfMDNf
// SIG // MjIuY3J0MIGfBgNVHSAEgZcwgZQwgZEGCSsGAQQBgjcu
// SIG // AzCBgzA/BggrBgEFBQcCARYzaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraW9wcy9kb2NzL3ByaW1hcnljcHMu
// SIG // aHRtMEAGCCsGAQUFBwICMDQeMiAdAEwAZQBnAGEAbABf
// SIG // AHAAbwBsAGkAYwB5AF8AcwB0AGEAdABlAG0AZQBuAHQA
// SIG // LiAdMA0GCSqGSIb3DQEBCwUAA4ICAQBn8oalmOBUeRou
// SIG // 09h0ZyKbC5YR4WOSmUKWfdJ5DJDBZV8uLD74w3LRbYP+
// SIG // vj/oCso7v0epo/Np22O/IjWll11lhJB9i0ZQVdgMknzS
// SIG // Gksc8zxCi1LQsP1r4z4HLimb5j0bpdS1HXeUOeLpZMlE
// SIG // PXh6I/MTfaaQdION9MsmAkYqwooQu6SpBQyb7Wj6aC6V
// SIG // oCo/KmtYSWMfCWluWpiW5IP0wI/zRive/DvQvTXvbiWu
// SIG // 5a8n7dDd8w6vmSiXmE0OPQvyCInWH8MyGOLwxS3OW560
// SIG // STkKxgrCxq2u5bLZ2xWIUUVYODJxJxp/sfQn+N4sOiBp
// SIG // mLJZiWhub6e3dMNABQamASooPoI/E01mC8CzTfXhj38c
// SIG // bxV9Rad25UAqZaPDXVJihsMdYzaXht/a8/jyFqGaJ+HN
// SIG // pZfQ7l1jQeNbB5yHPgZ3BtEGsXUfFL5hYbXw3MYbBL7f
// SIG // QccOKO7eZS/sl/ahXJbYANahRr1Z85elCUtIEJmAH9AA
// SIG // KcWxm6U/RXceNcbSoqKfenoi+kiVH6v7RyOA9Z74v2u3
// SIG // S5fi63V4GuzqN5l5GEv/1rMjaHXmr/r8i+sLgOppO6/8
// SIG // MO0ETI7f33VtY5E90Z1WTk+/gFcioXgRMiF670EKsT/7
// SIG // qMykXcGhiJtXcVZOSEXAQsmbdlsKgEhr/Xmfwb1tbWrJ
// SIG // UnMTDXpQzTGCBKowggSmAgEBMIGVMH4xCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xKDAmBgNVBAMTH01pY3Jvc29mdCBDb2Rl
// SIG // IFNpZ25pbmcgUENBIDIwMTECEzMAAADE6Yn4eoFQ6f8A
// SIG // AAAAAMQwCQYFKw4DAhoFAKCBvjAZBgkqhkiG9w0BCQMx
// SIG // DAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgELMQ4wDAYK
// SIG // KwYBBAGCNwIBFTAjBgkqhkiG9w0BCQQxFgQUBueVZ43B
// SIG // p7gJ3jKDED1RllHGNWkwXgYKKwYBBAGCNwIBDDFQME6g
// SIG // JoAkAE0AaQBjAHIAbwBzAG8AZgB0ACAATABlAGEAcgBu
// SIG // AGkAbgBnoSSAImh0dHA6Ly93d3cubWljcm9zb2Z0LmNv
// SIG // bS9sZWFybmluZyAwDQYJKoZIhvcNAQEBBQAEggEAgCru
// SIG // 3YAOqEbJeHFmKjdPwfA/H/obTJ+gd+ECVmXwobrKjH3q
// SIG // GVV/zkbgJFL0AvThNRRhfXPTMwp+XgKAnKM6hvIAFpuq
// SIG // /k38FUvGd3ennq+rWM+VHHSL29eMVAIRKXKdomLxmGHo
// SIG // CdtglCXQ9E5JHqgtDJ7T95ofctMhtmyYXtPHvzT5Spq8
// SIG // Yg+QULswO3tV9DTey06lnrv//Pxth7EYSAvbgqtj1/Ue
// SIG // 3dkOGv/FG9FU3iOyLbI+1xC6EdhOcasi6QKS+qjXPsaB
// SIG // RLGJgb+WzfF2vF52c4dEapO5slRIaDnM3JkCegFcJ5RG
// SIG // QO2MAxNknypamFy/xbio3wTHfnpJ76GCAigwggIkBgkq
// SIG // hkiG9w0BCQYxggIVMIICEQIBATCBjjB3MQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSEwHwYDVQQDExhNaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBQQ0ECEzMAAADBCfgCQbtNqtwAAAAAAMEw
// SIG // CQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG
// SIG // 9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE4MDMyNzAxMzcz
// SIG // MVowIwYJKoZIhvcNAQkEMRYEFBar2luRs6toLhmFwLTl
// SIG // WxKNWprmMA0GCSqGSIb3DQEBBQUABIIBAHHDVqiM4ac9
// SIG // NtR2GRzq2/HgSiSvoITc4H2GbGzSqkx5HQDVpVCSfWzW
// SIG // G0jA0IV7nLMY/5fFJCl0pNM/c+JKcEvKmGq/gnyJ3erK
// SIG // WLfUNx6MbhqQki5gR5EHYKauZ6PFLLu7/3kz47Khx9eB
// SIG // 64YazEiAtYg+gVhq1Dlb1Dn4TkJfQdrxHQiFjQMb3+gc
// SIG // 0gtNdySqEX3LnFPHhpstdz56zEsgzdNHhQ7Q1l/rOE+l
// SIG // j8pJsouRuFSfSFmnu1WbsZtqcsVxp2wfGNyo5Clrt4UM
// SIG // 8q74HwyRAsqWE4eOMXWUS7KCgQr0SDj57HB8EPU+zfbN
// SIG // 0/El2u3gLLx64ckRd5XhgVM=
// SIG // End signature block
