window.SIDEBAR_ITEMS = {"constant":[["VERSION_DEV","Indicates development branch. Releases will be empty string."],["VERSION_MAJOR","API incompatible changes."],["VERSION_MINOR","Changing functionality in a backwards-compatible manner"],["VERSION_PATCH","Backwards-compatible bug fixes."]],"enum":[["Arch","Available seccomp architectures."],["Capability","All available capabilities."],["LinuxDeviceType","Device types"],["LinuxNamespaceType","Available Linux namespaces."],["LinuxPersonalityDomain","Define domain and flags for LinuxPersonality."],["LinuxRlimitType","Available rlimit types (see https://man7.org/linux/man-pages/man2/getrlimit.2.html)"],["LinuxSeccompAction","Available seccomp actions."],["LinuxSeccompFilterFlag","Available seccomp filter flags."],["LinuxSeccompOperator","The seccomp operator to be used for args."]],"fn":[["get_default_maskedpaths","Default masks paths, cannot read these host files."],["get_default_mounts","utility function to generate default config for mounts."],["get_default_namespaces","Utility function to get default namespaces."],["get_default_readonly_paths","Default readonly paths, for example most containers shouldn’t have permission to write to `/proc/sys`."],["version","Retrieve the version as string representation."]],"struct":[["Box","Box specifies dimensions of a rectangle. Used for specifying the size of a console."],["BoxBuilder","Builder for `Box`."],["Hook","Hook specifies a command that is run at a particular event in the lifecycle of a container."],["HookBuilder","Builder for `Hook`."],["Hooks","Hooks specifies a command that is run in the container at a particular event in the lifecycle (setup and teardown) of a container."],["HooksBuilder","Builder for `Hooks`."],["Linux","Linux contains platform-specific configuration for Linux based containers."],["LinuxBlockIo","LinuxBlockIO for Linux cgroup ‘blkio’ resource management."],["LinuxBlockIoBuilder","Builder for `LinuxBlockIo`."],["LinuxBuilder","Builder for `Linux`."],["LinuxCapabilities","LinuxCapabilities specifies the list of allowed capabilities that are kept for a process. http://man7.org/linux/man-pages/man7/capabilities.7.html"],["LinuxCapabilitiesBuilder","Builder for `LinuxCapabilities`."],["LinuxCpu","LinuxCPU for Linux cgroup ‘cpu’ resource management."],["LinuxCpuBuilder","Builder for `LinuxCpu`."],["LinuxDevice","LinuxDevice represents the mknod information for a Linux special device file."],["LinuxDeviceBuilder","Builder for `LinuxDevice`."],["LinuxDeviceCgroup","Represents a device rule for the devices specified to the device controller"],["LinuxDeviceCgroupBuilder","Builder for `LinuxDeviceCgroup`."],["LinuxHugepageLimit","LinuxHugepageLimit structure corresponds to limiting kernel hugepages."],["LinuxHugepageLimitBuilder","Builder for `LinuxHugepageLimit`."],["LinuxIdMapping","LinuxIDMapping specifies UID/GID mappings."],["LinuxIdMappingBuilder","Builder for `LinuxIdMapping`."],["LinuxIntelRdt","LinuxIntelRdt has container runtime resource constraints for Intel RDT CAT and MBA features and flags enabling Intel RDT CMT and MBM features. Intel RDT features are available in Linux 4.14 and newer kernel versions."],["LinuxIntelRdtBuilder","Builder for `LinuxIntelRdt`."],["LinuxInterfacePriority","LinuxInterfacePriority for network interfaces."],["LinuxInterfacePriorityBuilder","Builder for `LinuxInterfacePriority`."],["LinuxMemory","LinuxMemory for Linux cgroup ‘memory’ resource management."],["LinuxMemoryBuilder","Builder for `LinuxMemory`."],["LinuxNamespace","LinuxNamespace is the configuration for a Linux namespace."],["LinuxNamespaceBuilder","Builder for `LinuxNamespace`."],["LinuxNetwork","LinuxNetwork identification and priority configuration."],["LinuxNetworkBuilder","Builder for `LinuxNetwork`."],["LinuxPersonality","LinuxPersonality represents the Linux personality syscall input."],["LinuxPersonalityBuilder","Builder for `LinuxPersonality`."],["LinuxPids","LinuxPids for Linux cgroup ‘pids’ resource management (Linux 4.3)."],["LinuxPidsBuilder","Builder for `LinuxPids`."],["LinuxRdma","LinuxRdma for Linux cgroup ‘rdma’ resource management (Linux 4.11)."],["LinuxRdmaBuilder","Builder for `LinuxRdma`."],["LinuxResources","Resource constraints for container"],["LinuxResourcesBuilder","Builder for `LinuxResources`."],["LinuxRlimit","RLimit types and restrictions."],["LinuxRlimitBuilder","Builder for `LinuxRlimit`."],["LinuxSeccomp","LinuxSeccomp represents syscall restrictions."],["LinuxSeccompArg","LinuxSeccompArg used for matching specific syscall arguments in seccomp."],["LinuxSeccompArgBuilder","Builder for `LinuxSeccompArg`."],["LinuxSeccompBuilder","Builder for `LinuxSeccomp`."],["LinuxSyscall","LinuxSyscall is used to match a syscall in seccomp."],["LinuxSyscallBuilder","Builder for `LinuxSyscall`."],["LinuxThrottleDevice","LinuxThrottleDevice struct holds a `major:minor rate_per_second` pair."],["LinuxThrottleDeviceBuilder","Builder for `LinuxThrottleDevice`."],["LinuxWeightDevice","LinuxWeightDevice struct holds a `major:minor weight` pair for weightDevice."],["LinuxWeightDeviceBuilder","Builder for `LinuxWeightDevice`."],["Mount","Mount specifies a mount for a container."],["MountBuilder","Builder for `Mount`."],["Process","Process contains information to start a specific application inside the container."],["ProcessBuilder","Builder for `Process`."],["Root","Root contains information about the container’s root filesystem on the host."],["RootBuilder","Builder for `Root`."],["Solaris","Solaris contains platform-specific configuration for Solaris application containers."],["SolarisAnet","SolarisAnet provides the specification for automatic creation of network resources for this container."],["SolarisAnetBuilder","Builder for `SolarisAnet`."],["SolarisBuilder","Builder for `Solaris`."],["SolarisCappedCPU","SolarisCappedCPU allows users to set limit on the amount of CPU time that can be used by container."],["SolarisCappedCPUBuilder","Builder for `SolarisCappedCPU`."],["SolarisCappedMemory","SolarisCappedMemory allows users to set the physical and swap caps on the memory that can be used by this container."],["SolarisCappedMemoryBuilder","Builder for `SolarisCappedMemory`."],["Spec","Base configuration for the container."],["SpecBuilder","Builder for `Spec`."],["User","User id (uid) and group id (gid) tracks file permssions."],["UserBuilder","Builder for `User`."],["VM","VM contains information for virtual-machine-based containers."],["VMBuilder","Builder for `VM`."],["VMHypervisor","VMHypervisor contains information about the hypervisor to use for a virtual machine."],["VMHypervisorBuilder","Builder for `VMHypervisor`."],["VMImage","VMImage contains information about the virtual machine root image."],["VMImageBuilder","Builder for `VMImage`."],["VMKernel","VMKernel contains information about the kernel to use for a virtual machine."],["VMKernelBuilder","Builder for `VMKernel`."],["Windows","Windows defines the runtime configuration for Windows based containers, including Hyper-V containers."],["WindowsBuilder","Builder for `Windows`."],["WindowsCPUResources","WindowsCPUResources contains CPU resource management settings."],["WindowsCPUResourcesBuilder","Builder for `WindowsCPUResources`."],["WindowsDevice","WindowsDevice represents information about a host device to be mapped into the container."],["WindowsDeviceBuilder","Builder for `WindowsDevice`."],["WindowsHyperV","WindowsHyperV contains information for configuring a container to run with Hyper-V isolation."],["WindowsHyperVBuilder","Builder for `WindowsHyperV`."],["WindowsMemoryResources","WindowsMemoryResources contains memory resource management settings."],["WindowsMemoryResourcesBuilder","Builder for `WindowsMemoryResources`."],["WindowsNetwork","WindowsNetwork contains network settings for Windows containers."],["WindowsNetworkBuilder","Builder for `WindowsNetwork`."],["WindowsResources","Available windows resources."],["WindowsResourcesBuilder","Builder for `WindowsResources`."],["WindowsStorageResources","WindowsStorageResources contains storage resource management settings."],["WindowsStorageResourcesBuilder","Builder for `WindowsStorageResources`."]],"type":[["Capabilities","Capabilities is a unique set of Capability values."]]};