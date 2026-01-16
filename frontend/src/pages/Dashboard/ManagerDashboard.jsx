import React, { useState, useEffect } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import { useSearchParams } from 'react-router-dom';
import { 
  BarChart, Coffee, Users, ClipboardList, Plus, 
  Settings, Save, Trash2, CheckCircle, Clock, AlertCircle,
  Package, Star, Award, Quote, Image as ImageIcon, BookOpen, Send, Mail,
  Home, Info, Zap, MapPin, Globe, Phone, X
} from 'lucide-react';

import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { uploadToCloudinary } from '../../utils/cloudinary';

const ManagerDashboard = () => {
    const { user } = useUser();
    const { getToken } = useAuth();
    const [searchParams, setSearchParams] = useSearchParams();
    const tabParam = searchParams.get('tab') || 'content';
    const [activeTab, setActiveTab] = useState(tabParam);
    const [contentSubTab, setContentSubTab] = useState('about');
    
    const [dataList, setDataList] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [editingItem, setEditingItem] = useState(null);

    const [socialLinks, setSocialLinks] = useState([{ platform: 'Facebook', url: '' }]);
    const [previews, setPreviews] = useState({});
    const [sliderImageFiles, setSliderImageFiles] = useState([]);
    
    // Request Management State
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [responseNote, setResponseNote] = useState('');

    useEffect(() => {
        setActiveTab(tabParam);
    }, [tabParam]);

    useEffect(() => {
        fetchData();
        // Reset edit mode when tab changes
        setEditingItem(null); 
    }, [activeTab, contentSubTab]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const token = await getToken();
            const headers = { 'Authorization': `Bearer ${token}` };

            if (activeTab === 'content') {
                const endpointMap = {
                    about: 'about',
                    services: 'services',
                    products: 'products',
                    gallery: 'gallery',
                    blogs: 'blogs',
                    testimonials: 'testimonials',
                    certificates: 'certificates',
                    footer: 'contact-info'
                };
                const endpoint = endpointMap[contentSubTab];
                const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/${endpoint}`);
                const data = await res.json();
                const list = Array.isArray(data) ? data : [];
                setDataList(list);

                // SINGLETON LOGIC: Pre-load data for Footer and About
                if (contentSubTab === 'footer') {
                    if (list.length > 0 && list[0].socials) {
                        setSocialLinks(list[0].socials.length > 0 ? list[0].socials : [{ platform: 'Facebook', url: '' }]);
                    } else {
                        setSocialLinks([{ platform: 'Facebook', url: '' }]);
                    }
                } else if (contentSubTab === 'about' && list.length > 0) {
                     // Auto-select first item for editing to enforce singleton feel
                     setEditingItem(list[0]);
                }
            } else if (activeTab === 'tasks') {
                const [tasksRes, usersRes] = await Promise.all([
                    fetch(`${import.meta.env.VITE_API_URL}/ops/tasks/all`, { headers }),
                    fetch(`${import.meta.env.VITE_API_URL}/users`, { headers })
                ]);
                const tasksData = await tasksRes.json();
                const usersData = await usersRes.json();
                setTasks(Array.isArray(tasksData) ? tasksData : []);
                const allUsers = Array.isArray(usersData) ? usersData : (usersData.data || []);
                setEmployees(allUsers.filter(u => u.role === 'employee'));
            } else if (activeTab === 'users') {
                 const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, { headers });
                 const data = await res.json();
                 const allUsers = Array.isArray(data) ? data : (data.data || []);
                 setEmployees(allUsers.filter(u => u.role === 'employee'));
                 setCustomers(allUsers.filter(u => u.role === 'customer'));
            } else if (activeTab === 'requests') {
                 const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/requests/all`, { headers });
                 const data = await res.json();
                 setRequests(Array.isArray(data) ? data : []);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateContent = async (e) => {
        e.preventDefault();
        setMessage('Processing...');
        const formData = new FormData(e.target);
        
        // Handle File Uploads
        const fileFields = ['image', 'bentoImage'];
        for (const field of fileFields) {
            const file = formData.get(field);
            
            if (file instanceof File && file.size > 0) {
                 try {
                    const url = await uploadToCloudinary(file);
                    formData.set(field, url);
                 } catch (error) {
                    console.error("Upload failed", error);
                    setMessage('Image upload failed');
                    return;
                 }
            } else {
                 // If not a new valid file, remove it so we don't send empty File objects
                 formData.delete(field);
            }
        }

        // Handle multiple slider images for About section
        if (contentSubTab === 'about' && sliderImageFiles.length > 0) {
            try {
                const uploadedUrls = await Promise.all(
                    sliderImageFiles.map(file => uploadToCloudinary(file))
                );
                formData.set('sliderImages', JSON.stringify(uploadedUrls));
            } catch (error) {
                console.error("Slider images upload failed", error);
                setMessage('Slider images upload failed');
                return;
            }
        }

        let payload = {};
        
        if (contentSubTab === 'footer') {
             // ... footer payload logic ...
             payload = {
                phone: formData.get('phone'),
                email: formData.get('email'),
                address: formData.get('address'),
                city: formData.get('city'),
                country: formData.get('country'),
                socials: socialLinks.filter(s => s.url) 
            };
        } else {
            payload = Object.fromEntries(formData.entries());
             // Fix checkbox "on" value to boolean true
            if (payload.isFeatured === 'on') payload.isFeatured = true;
            // Parse sliderImages JSON string back to array
            if (payload.sliderImages) {
                payload.sliderImages = JSON.parse(payload.sliderImages);
            }
        }
        
        try {
            const token = await getToken();
            const endpointMap = {
                about: 'about',
                services: 'services',
                products: 'products',
                gallery: 'gallery',
                blogs: 'blogs',
                testimonials: 'testimonials',
                certificates: 'certificates',
                footer: 'contact-info'
            };
            const endpoint = endpointMap[contentSubTab];
            
            let url = `${import.meta.env.VITE_API_URL}/ops/${endpoint}`;
            let method = 'POST';

            if (editingItem) {
                url = `${url}/${editingItem._id}`;
                method = 'PUT';
            } else if ((contentSubTab === 'footer' || contentSubTab === 'about') && dataList.length > 0) {
                 // Fallback for singletons if editingItem wasn't set for some reason
                 url = `${url}/${dataList[0]._id}`;
                 method = 'PUT';
            }
            
            const res = await fetch(url, {
                method: method,
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setMessage(`${contentSubTab} ${method === 'PUT' ? 'updated' : 'created'} successfully!`);
                fetchData();
                setEditingItem(null); // Clear edit mode
                if (contentSubTab !== 'footer') e.target.reset();
                setTimeout(() => setMessage(''), 3000);
            } else {
                const errorData = await res.json();
                setMessage(`Error: ${errorData.message || 'Failed to save item'}`);
            }
        } catch (err) { 
            console.error(err);
            setMessage(`Error: ${err.message || 'Something went wrong'}`);
        }
    };

    // Social Link Helpers
    const addSocialLink = () => {
        setSocialLinks([...socialLinks, { platform: 'Facebook', url: '' }]);
    };
    const removeSocialLink = (index) => {
        const newLinks = [...socialLinks];
        newLinks.splice(index, 1);
        setSocialLinks(newLinks);
    };
    const updateSocialLink = (index, field, value) => {
        const newLinks = [...socialLinks];
        newLinks[index][field] = value;
        setSocialLinks(newLinks);
    };

    const handleEditContent = (item) => {
        setEditingItem(item);
        if (item.socials) setSocialLinks(item.socials);
        setPreviews({}); // Clear previews on edit
        window.scrollTo({ top: 100, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setEditingItem(null);
        setSocialLinks([{ platform: 'Facebook', url: '' }]);
        setPreviews({});
        setSliderImageFiles([]);
    };

    const handleDeleteContent = async (id) => {
        if (!window.confirm('Are you sure you want to delete this item?')) return;
        try {
            const token = await getToken();
            const endpointMap = {
                about: 'about',
                services: 'services',
                products: 'products',
                gallery: 'gallery',
                blogs: 'blogs',
                testimonials: 'testimonials',
                certificates: 'certificates',
                footer: 'contact-info'
            };
            const endpoint = endpointMap[contentSubTab];
            
            const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/${endpoint}/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                setMessage('Item removed successfully');
                fetchData();
            }
        } catch (err) { console.error(err); }
    };

    const handleRespondRequest = async (e) => {
        e.preventDefault();
        if (!selectedRequest || !responseNote.trim()) return;

        try {
            const token = await getToken();
            const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/requests/${selectedRequest._id}/respond`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ response: responseNote, status: 'responded' })
            });

            if (res.ok) {
                setMessage('Response sent successfully');
                setSelectedRequest(null);
                setResponseNote('');
                fetchData();
            } else {
                setMessage('Failed to send response');
            }
        } catch (error) {
            console.error(error);
            setMessage('Error sending response');
        }
    };

    const isWideView = ['users', 'requests'].includes(activeTab);

    const subTabs = [
        { id: 'about', label: 'About', icon: Info },
        { id: 'services', label: 'Services', icon: Coffee },
        { id: 'products', label: 'Products', icon: Package },
        { id: 'gallery', label: 'Gallery', icon: ImageIcon },
        { id: 'blogs', label: 'Blogs', icon: BookOpen },
        { id: 'testimonials', label: 'Reviews', icon: Quote },
        { id: 'certificates', label: 'Certs', icon: Award },
        { id: 'footer', label: 'Footer', icon: MapPin },
    ];

    const handleAssignTask = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTask = Object.fromEntries(formData.entries());
        
        try {
            const token = await getToken();
            const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/tasks`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newTask)
            });
            if (res.ok) {
                setMessage('Task assigned successfully!');
                fetchData();
                e.target.reset();
                setTimeout(() => setMessage(''), 3000);
            }
        } catch (err) { console.error(err); }
    };



    return (
        <DashboardLayout>
            <div className="min-h-screen pb-12 text-gray-900 dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold flex items-center gap-3">
                            <BarChart className="text-red-600" /> 
                            {activeTab === 'content' ? 'Storefront Command Center' : 'Task Console'}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            {activeTab === 'content' ? 'Master control for every section of your public website.' : 
                             'Assign and monitor tasks for the operations team.'}
                        </p>
                    </div>
                </div>

                {message && <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl border border-green-200 dark:border-green-800 flex items-center gap-2 shadow-sm font-bold animate-fade-in"><CheckCircle size={20} /> {message}</div>}

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* LEFT PANEL: Nav & Forms */}
                    <div className={`space-y-6 ${isWideView ? 'hidden' : 'lg:col-span-2'}`}>
                        {activeTab === 'content' && (
                            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700">
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Site Sections</h3>
                                </div>
                                <div className="p-2 space-y-1">
                                    {subTabs.map(tab => (
                                        <button 
                                            key={tab.id}
                                            onClick={() => setContentSubTab(tab.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                                                contentSubTab === tab.id 
                                                ? 'bg-red-600 text-white shadow-lg shadow-red-500/20' 
                                                : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                                            }`}
                                        >
                                            <tab.icon size={18} />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* CENTER PANEL: Forms */}
                    <div className={`space-y-8 ${isWideView ? 'lg:col-span-12' : 'lg:col-span-7'}`}>
                        {activeTab === 'content' && (
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all sticky top-24">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-sm font-black uppercase tracking-widest flex items-center gap-2 dark:text-white">
                                        {editingItem ? (
                                            <>
                                                <Settings className="text-blue-500" size={18} /> 
                                                Edit {contentSubTab}
                                            </>
                                        ) : (
                                            <>
                                                <Plus className="text-red-600" size={18} /> 
                                                Add {contentSubTab}
                                            </>
                                        )}
                                    </h2>
                                    {editingItem && (
                                        <button onClick={handleCancelEdit} className="text-[10px] font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest">
                                            Cancel Edit
                                        </button>
                                    )}
                                </div>
                                
                                <form key={editingItem ? editingItem._id : 'new'} onSubmit={handleCreateContent} className="space-y-4">
                                    {contentSubTab === 'about' && (
                                        <>
                                            <div className="grid grid-cols-2 gap-2">
                                                <input name="name" defaultValue={editingItem?.name} placeholder="Name (Mr. Beri M)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                                <input name="role" defaultValue={editingItem?.role} placeholder="Role (Founder & CEO)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            </div>
                                            <textarea name="quote" defaultValue={editingItem?.quote} placeholder="Quote..." className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm h-20" />
                                            <textarea name="description" defaultValue={editingItem?.description} placeholder="Bio/Description" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm h-32" required />
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase">Upload Portrait</label>
                                                <div className="relative group w-full h-40 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden hover:border-red-500 transition-colors">
                                                    {previews.image || editingItem?.image ? (
                                                        <img src={previews.image || editingItem.image} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                                                    ) : (
                                                        <div className="text-gray-400 flex flex-col items-center gap-1">
                                                            <ImageIcon size={24} />
                                                            <span className="text-[10px] uppercase font-bold">Select Image</span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                        <span className="text-white text-xs font-bold uppercase">Change Image</span>
                                                    </div>
                                                    <input 
                                                        type="file" 
                                                        name="image" 
                                                        accept="image/*" 
                                                        className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                                                        onChange={(e) => {
                                                            if(e.target.files[0]) {
                                                                setPreviews(prev => ({...prev, image: URL.createObjectURL(e.target.files[0])}))
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                {editingItem?.image && !previews.image && <p className="text-[10px] text-gray-400 truncate text-center">Current: {editingItem.image.split('/').pop()}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase">Slider Images (Auto-rotate every 3 sec)</label>
                                                <div className="relative group w-full min-h-32 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center p-4 hover:border-red-500 transition-colors">
                                                    {sliderImageFiles.length > 0 || editingItem?.sliderImages?.length > 0 ? (
                                                        <div className="w-full grid grid-cols-3 gap-2">
                                                            {(sliderImageFiles.length > 0 ? sliderImageFiles : editingItem?.sliderImages || []).map((item, idx) => (
                                                                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                                                                    <img 
                                                                        src={item instanceof File ? URL.createObjectURL(item) : item} 
                                                                        className="w-full h-full object-cover" 
                                                                        alt={`Slider ${idx + 1}`} 
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            if (sliderImageFiles.length > 0) {
                                                                                setSliderImageFiles(prev => prev.filter((_, i) => i !== idx));
                                                                            }
                                                                        }}
                                                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                                                                    >
                                                                        <X size={12} />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="text-gray-400 flex flex-col items-center gap-1">
                                                            <ImageIcon size={24} />
                                                            <span className="text-[10px] uppercase font-bold">Select Multiple Images</span>
                                                        </div>
                                                    )}
                                                    <input 
                                                        type="file" 
                                                        multiple
                                                        accept="image/*" 
                                                        className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                                                        onChange={(e) => {
                                                            if(e.target.files && e.target.files.length > 0) {
                                                                setSliderImageFiles(Array.from(e.target.files));
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                {editingItem?.sliderImages?.length > 0 && sliderImageFiles.length === 0 && (
                                                    <p className="text-[10px] text-gray-400 text-center">{editingItem.sliderImages.length} slider image(s) uploaded</p>
                                                )}
                                            </div>
                                            <input name="tagline" defaultValue={editingItem?.tagline} placeholder="Tagline (optional)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                        </>
                                    )}
                                    {contentSubTab === 'services' && (
                                        <>
                                            <input name="title" defaultValue={editingItem?.title} placeholder="Service Title (e.g. Ethical Sourcing)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <input name="features" defaultValue={editingItem?.features} placeholder="#Tags (Flashy bits)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                            <textarea name="description" defaultValue={editingItem?.description} placeholder="Service Details" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm h-32" required />
                                            <div className="space-y-4">
                                                <div className="flex gap-4">
                                                    {/* Small Card Image */}
                                                    <div className="w-1/2 space-y-2">
                                                        <label className="text-xs font-bold text-gray-400 uppercase">Small Card Image</label>
                                                        
                                                        <div className="relative group w-full h-40 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden hover:border-red-500 transition-colors">
                                                            {previews.image || editingItem?.image ? (
                                                                <img src={previews.image || editingItem.image} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                                                            ) : (
                                                                <div className="text-gray-400 flex flex-col items-center gap-1">
                                                                    <ImageIcon size={24} />
                                                                    <span className="text-[10px] uppercase font-bold">Select Image</span>
                                                                </div>
                                                            )}
                                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                                <span className="text-white text-xs font-bold uppercase">Change Image</span>
                                                            </div>
                                                            <input 
                                                                type="file" 
                                                                name="image" 
                                                                accept="image/*" 
                                                                className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                                                                onChange={(e) => {
                                                                    if(e.target.files[0]) {
                                                                        setPreviews(prev => ({...prev, image: URL.createObjectURL(e.target.files[0])}))
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                        {editingItem?.image && !previews.image && <p className="text-[10px] text-gray-400 truncate text-center">Current: {editingItem.image.split('/').pop()}</p>}
                                                    </div>

                                                    {/* Large Bento Image */}
                                                    <div className="w-1/2 space-y-2">
                                                        <label className="text-xs font-bold text-gray-400 uppercase">Large Bento Image</label>
                                                        
                                                        <div className="relative group w-full h-40 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden hover:border-red-500 transition-colors">
                                                            {previews.bentoImage || editingItem?.bentoImage ? (
                                                                <img src={previews.bentoImage || editingItem.bentoImage} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                                                            ) : (
                                                                <div className="text-gray-400 flex flex-col items-center gap-1">
                                                                    <ImageIcon size={24} />
                                                                    <span className="text-[10px] uppercase font-bold">Select Image</span>
                                                                </div>
                                                            )}
                                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                                <span className="text-white text-xs font-bold uppercase">Change Image</span>
                                                            </div>
                                                            <input 
                                                                type="file" 
                                                                name="bentoImage" 
                                                                accept="image/*" 
                                                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                                                onChange={(e) => {
                                                                    if(e.target.files[0]) {
                                                                        setPreviews(prev => ({...prev, bentoImage: URL.createObjectURL(e.target.files[0])}))
                                                                    }
                                                                }} 
                                                            />
                                                        </div>
                                                        {editingItem?.bentoImage && !previews.bentoImage && <p className="text-[10px] text-gray-400 truncate text-center">Current: {editingItem.bentoImage.split('/').pop()}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {contentSubTab === 'products' && (
                                        <>
                                            <div className="grid grid-cols-2 gap-2">
                                                <input name="name" defaultValue={editingItem?.name} placeholder="Product Name" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                                <input name="region" defaultValue={editingItem?.region} placeholder="Region (Guij, Sidamo...)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                            </div>
                                            <input name="type" defaultValue={editingItem?.type} placeholder="Process Type (e.g. Washed Process)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                            <textarea name="short_desc" defaultValue={editingItem?.short_desc} placeholder="Short Catchy Description" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm h-20" required />
                                            <textarea name="long_desc" defaultValue={editingItem?.long_desc} placeholder="Full Detailed Story" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm h-32" />
                                            <input name="profile" defaultValue={editingItem?.profile} placeholder="Flavor Profile (Jasmine, Lemon, Honey...)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                            <div className="grid grid-cols-3 gap-2">
                                                <input name="elevation" defaultValue={editingItem?.elevation} placeholder="Elevation (m)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                                <input name="score" defaultValue={editingItem?.score} placeholder="SCA Score (89+)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                                <input name="tag" defaultValue={editingItem?.tag} placeholder="Tag (Floral, Hot...)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                            </div>
                                            <div className="flex items-center gap-4 px-4 py-2 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                                                <label className="flex items-center gap-2 text-sm font-bold text-gray-500 cursor-pointer">
                                                    <input type="checkbox" name="isFeatured" defaultChecked={editingItem?.isFeatured} className="w-4 h-4 accent-red-600" />
                                                    Show in Home Featured Collections
                                                </label>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase">Upload Product Image</label>
                                                <div className="relative group w-full h-40 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden hover:border-red-500 transition-colors">
                                                    {previews.image || editingItem?.image ? (
                                                        <img src={previews.image || editingItem.image} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                                                    ) : (
                                                        <div className="text-gray-400 flex flex-col items-center gap-1">
                                                            <ImageIcon size={24} />
                                                            <span className="text-[10px] uppercase font-bold">Select Image</span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                        <span className="text-white text-xs font-bold uppercase">Change Image</span>
                                                    </div>
                                                    <input 
                                                        type="file" 
                                                        name="image" 
                                                        accept="image/*" 
                                                        className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                                                        onChange={(e) => {
                                                            if(e.target.files[0]) {
                                                                setPreviews(prev => ({...prev, image: URL.createObjectURL(e.target.files[0])}))
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                {editingItem?.image && !previews.image && <p className="text-[10px] text-gray-400 truncate text-center">Current: {editingItem.image.split('/').pop()}</p>}
                                            </div>
                                        </>
                                    )}
                                    {contentSubTab === 'gallery' && (
                                        <>
                                            <input name="title" defaultValue={editingItem?.title} placeholder="Image Title" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <input name="category" defaultValue={editingItem?.category} placeholder="Category" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <input name="description" defaultValue={editingItem?.description} placeholder="Caption" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase">Upload Gallery Image</label>
                                                <div className="relative group w-full h-40 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden hover:border-red-500 transition-colors">
                                                    {previews.image || editingItem?.image ? (
                                                        <img src={previews.image || editingItem.image} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                                                    ) : (
                                                        <div className="text-gray-400 flex flex-col items-center gap-1">
                                                            <ImageIcon size={24} />
                                                            <span className="text-[10px] uppercase font-bold">Select Image</span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                        <span className="text-white text-xs font-bold uppercase">Change Image</span>
                                                    </div>
                                                    <input 
                                                        type="file" 
                                                        name="image" 
                                                        accept="image/*" 
                                                        className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                                                        onChange={(e) => {
                                                            if(e.target.files[0]) {
                                                                setPreviews(prev => ({...prev, image: URL.createObjectURL(e.target.files[0])}))
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                {editingItem?.image && !previews.image && <p className="text-[10px] text-gray-400 truncate text-center">Current: {editingItem.image.split('/').pop()}</p>}
                                            </div>
                                        </>
                                    )}
                                    {contentSubTab === 'blogs' && (
                                        <>
                                            <input name="title" defaultValue={editingItem?.title} placeholder="Blog Title" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <textarea name="description" defaultValue={editingItem?.description} placeholder="Short Excerpt" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm h-24" required />
                                            <input name="category" defaultValue={editingItem?.category} placeholder="Category" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase">Upload Cover Image</label>
                                                <div className="relative group w-full h-40 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden hover:border-red-500 transition-colors">
                                                    {previews.image || editingItem?.image ? (
                                                        <img src={previews.image || editingItem.image} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                                                    ) : (
                                                        <div className="text-gray-400 flex flex-col items-center gap-1">
                                                            <ImageIcon size={24} />
                                                            <span className="text-[10px] uppercase font-bold">Select Image</span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                        <span className="text-white text-xs font-bold uppercase">Change Image</span>
                                                    </div>
                                                    <input 
                                                        type="file" 
                                                        name="image" 
                                                        accept="image/*" 
                                                        className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                                                        onChange={(e) => {
                                                            if(e.target.files[0]) {
                                                                setPreviews(prev => ({...prev, image: URL.createObjectURL(e.target.files[0])}))
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                {editingItem?.image && !previews.image && <p className="text-[10px] text-gray-400 truncate text-center">Current: {editingItem.image.split('/').pop()}</p>}
                                            </div>
                                            <input name="author" defaultValue={editingItem?.author} placeholder="Author Name" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                        </>
                                    )}
                                    {contentSubTab === 'testimonials' && (
                                        <>
                                            <input name="name" defaultValue={editingItem?.name} placeholder="Member/Partner Name" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <input name="role" defaultValue={editingItem?.role} placeholder="Job Role" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <input name="company" defaultValue={editingItem?.company} placeholder="Company" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <textarea name="feedback" defaultValue={editingItem?.feedback} placeholder="Message..." className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm h-32" required />
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase">Upload Avatar</label>
                                                <div className="relative group w-full h-40 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden hover:border-red-500 transition-colors">
                                                    {previews.image || editingItem?.image ? (
                                                        <img src={previews.image || editingItem.image} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                                                    ) : (
                                                        <div className="text-gray-400 flex flex-col items-center gap-1">
                                                            <ImageIcon size={24} />
                                                            <span className="text-[10px] uppercase font-bold">Select Image</span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                        <span className="text-white text-xs font-bold uppercase">Change Image</span>
                                                    </div>
                                                    <input 
                                                        type="file" 
                                                        name="image" 
                                                        accept="image/*" 
                                                        className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                                                        onChange={(e) => {
                                                            if(e.target.files[0]) {
                                                                setPreviews(prev => ({...prev, image: URL.createObjectURL(e.target.files[0])}))
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                {editingItem?.image && !previews.image && <p className="text-[10px] text-gray-400 truncate text-center">Current: {editingItem.image.split('/').pop()}</p>}
                                            </div>
                                        </>
                                    )}
                                    {contentSubTab === 'certificates' && (
                                        <>
                                            <input name="title" defaultValue={editingItem?.title} placeholder="Certificate Name" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <input name="description" defaultValue={editingItem?.description} placeholder="Issuing Body/Detail" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase">Upload Certificate</label>
                                                <div className="relative group w-full h-40 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden hover:border-red-500 transition-colors">
                                                    {previews.image || editingItem?.image ? (
                                                        <img src={previews.image || editingItem.image} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                                                    ) : (
                                                        <div className="text-gray-400 flex flex-col items-center gap-1">
                                                            <ImageIcon size={24} />
                                                            <span className="text-[10px] uppercase font-bold">Select Image</span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                        <span className="text-white text-xs font-bold uppercase">Change Image</span>
                                                    </div>
                                                    <input 
                                                        type="file" 
                                                        name="image" 
                                                        accept="image/*" 
                                                        className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                                                        onChange={(e) => {
                                                            if(e.target.files[0]) {
                                                                setPreviews(prev => ({...prev, image: URL.createObjectURL(e.target.files[0])}))
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                {editingItem?.image && !previews.image && <p className="text-[10px] text-gray-400 truncate text-center">Current: {editingItem.image.split('/').pop()}</p>}
                                            </div>
                                        </>
                                    )}
                                    {contentSubTab === 'footer' && (
                                        <>
                                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl mb-4 text-xs text-yellow-700 dark:text-yellow-400">
                                                Editing Contact Info. This will update the site footer.
                                            </div>
                                            <input name="phone" defaultValue={dataList[0]?.phone} placeholder="Phone Number" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <input name="email" defaultValue={dataList[0]?.email} placeholder="Business Email" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" required />
                                            <textarea name="address" defaultValue={dataList[0]?.address} placeholder="Full Address" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm h-20" required />
                                            <div className="grid grid-cols-2 gap-2">
                                                <input name="city" defaultValue={dataList[0]?.city} placeholder="City" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                                <input name="country" defaultValue={dataList[0]?.country} placeholder="Country" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-sm" />
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-end">
                                                    <p className="text-[10px] font-black uppercase text-gray-400">Social Media Connections</p>
                                                    <button type="button" onClick={addSocialLink} className="text-[10px] font-bold text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-lg transition-colors flex items-center gap-1">
                                                        <Plus size={12}/> Add Social
                                                    </button>
                                                </div>
                                                
                                                {socialLinks.map((link, idx) => (
                                                    <div key={idx} className="flex gap-2 items-center">
                                                        <select 
                                                            value={link.platform}
                                                            onChange={(e) => updateSocialLink(idx, 'platform', e.target.value)}
                                                            className="w-1/3 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-xs font-bold"
                                                        >
                                                            <option value="Facebook">Facebook</option>
                                                            <option value="Instagram">Instagram</option>
                                                            <option value="LinkedIn">LinkedIn</option>
                                                            <option value="Twitter">Twitter</option>
                                                            <option value="YouTube">YouTube</option>
                                                            <option value="TikTok">TikTok</option>
                                                            <option value="Telegram">Telegram</option>
                                                            <option value="WhatsApp">WhatsApp</option>
                                                        </select>
                                                        <input 
                                                            value={link.url}
                                                            onChange={(e) => updateSocialLink(idx, 'url', e.target.value)}
                                                            placeholder="Profile URL..." 
                                                            className="flex-grow p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none text-xs" 
                                                        />
                                                        {socialLinks.length > 1 && (
                                                            <button 
                                                                type="button" 
                                                                onClick={() => removeSocialLink(idx)}
                                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                            >
                                                                <Trash2 size={16}/>
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                    <button type="submit" className={`w-full py-4 ${editingItem ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30' : 'bg-red-600 hover:bg-red-700 shadow-red-500/30'} text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-lg transition-all transform hover:-translate-y-1`}>
                                        {editingItem ? 'Save Changes' : 'Publish New Item'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'tasks' && (
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all sticky top-24">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white"><ClipboardList className="text-red-600" /> Assign Operation Task</h2>
                                <form onSubmit={handleAssignTask} className="space-y-4">
                                    <input name="title" placeholder="Task Title" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none" required />
                                    <textarea name="description" placeholder="Detailed Instructions" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none" required />
                                    <select name="assignedTo" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none" required>
                                        <option value="">Select Employee</option>
                                        {employees.map(emp => <option key={emp._id || emp.id} value={emp._id || emp.id}>{emp.firstName || emp.name} {emp.lastName}</option>)}
                                    </select>
                                    <input type="date" name="dueDate" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-transparent focus:border-red-500 dark:text-white outline-none" />
                                    <button type="submit" className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-500/30 transition-all">Send Task</button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'users' && (
                            <div className="space-y-8">
                                {/* Employees Section */}
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                                        <Users className="text-red-600" /> Employees ({employees.length})
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                                            <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase text-gray-700 dark:text-gray-300">
                                                <tr>
                                                    <th className="px-6 py-3 rounded-l-xl">Name</th>
                                                    <th className="px-6 py-3">Email</th>
                                                    <th className="px-6 py-3 rounded-r-xl">Role</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                                {employees.length > 0 ? employees.map((emp) => (
                                                    <tr key={emp._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white flex items-center justify-center font-bold text-xs">
                                                                {emp.firstName?.charAt(0) || emp.fullName?.charAt(0) || 'E'}
                                                            </div>
                                                            {emp.firstName} {emp.lastName}
                                                        </td>
                                                        <td className="px-6 py-4">{emp.email}</td>
                                                        <td className="px-6 py-4"><span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase">{emp.role}</span></td>
                                                    </tr>
                                                )) : (
                                                    <tr><td colSpan="3" className="px-6 py-8 text-center">No employees found.</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Customers Section */}
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                                        <Users className="text-blue-600" /> Customers ({customers.length})
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                                            <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase text-gray-700 dark:text-gray-300">
                                                <tr>
                                                    <th className="px-6 py-3 rounded-l-xl">Name</th>
                                                    <th className="px-6 py-3">Email</th>
                                                    <th className="px-6 py-3 rounded-r-xl">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                                {customers.length > 0 ? customers.map((cust) => (
                                                    <tr key={cust._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xs">
                                                                {cust.firstName?.charAt(0) || cust.fullName?.charAt(0) || 'C'}
                                                            </div>
                                                            {cust.firstName} {cust.lastName}
                                                        </td>
                                                        <td className="px-6 py-4">{cust.email}</td>
                                                        <td className="px-6 py-4"><span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Active</span></td>
                                                    </tr>
                                                )) : (
                                                    <tr><td colSpan="3" className="px-6 py-8 text-center">No customers found.</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'requests' && (
                             <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                                    <Mail className="text-red-600" /> Customer Requests ({requests.length})
                                </h2>
                                <div className="overflow-hidden">
                                    {requests.length > 0 ? (
                                        <div className="grid gap-4">
                                            {requests.map(req => (
                                                <div key={req._id} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${req.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                                {req.status || 'Pending'}
                                                            </span>
                                                            <span className="text-xs text-gray-400">
                                                                {new Date(req.createdAt).toLocaleDateString()}
                                                            </span>
                                                        </div>
                                                        <h3 className="font-bold text-gray-900 dark:text-white">{req.title || 'Service Request'}</h3>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{req.description}</p>
                                                        {req.customer && (
                                                            <div className="flex items-center gap-2 mt-2 text-xs font-medium text-gray-500">
                                                                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                                                    {req.customer.firstName?.charAt(0)}
                                                                </div>
                                                                {req.customer.firstName} {req.customer.lastName}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button onClick={() => setSelectedRequest(req)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase rounded-lg transition-colors">
                                                            View
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-12">
                                            <Mail size={48} className="mx-auto text-gray-200 mb-4" />
                                            <p className="text-gray-400 font-bold">No new requests</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT PANEL: List Displays */}
                    <div className={`${isWideView ? 'hidden' : 'lg:col-span-3'}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden h-full min-h-[500px]">
                            <div className="p-6 border-b border-gray-50 dark:border-gray-700 flex justify-between items-center">
                                <h3 className="font-bold text-lg dark:text-white capitalize">
                                    {activeTab === 'content' ? `${contentSubTab} Catalogue` : 'Active Tasks'}
                                </h3>
                                <div className="text-xs bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-500">Live Production Asset</div>
                            </div>

                            <div className="p-0">
                                {loading ? (
                                    <div className="p-20 text-center flex flex-col items-center gap-4">
                                        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                                        <span className="text-gray-400 font-bold tracking-widest uppercase text-xs">Synchronizing DB...</span>
                                    </div>
                                ) : (
                                    <div className="divide-y divide-gray-50 dark:divide-gray-700">
                                        {activeTab === 'content' && dataList.length === 0 && (
                                            <div className="p-20 text-center text-gray-400">No {contentSubTab} assets found. Add your first item.</div>
                                        )}
                                        {activeTab === 'content' && dataList.map(item => (
                                            <div key={item._id} className="relative p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                                                <div className="flex gap-6 items-center">
                                                    <div className="flex gap-4 items-center">
                                                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 dark:border-gray-700 flex items-center justify-center relative group/img">
                                                            {item.image ? (
                                                                <img src={item.image} alt="Card" className="w-full h-full object-cover" />
                                                            ) : (
                                                                <div className="text-red-600 font-black text-[10px] text-center p-1">No Image</div>
                                                            )}
                                                            <div className="absolute inset-0 bg-black/50 text-white text-[8px] flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity font-bold uppercase">Card</div>
                                                        </div>

                                                        {item.bentoImage && (
                                                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 dark:border-gray-700 flex items-center justify-center relative group/img">
                                                                <img src={item.bentoImage} alt="Bento" className="w-full h-full object-cover" />
                                                                <div className="absolute inset-0 bg-black/50 text-white text-[8px] flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity font-bold uppercase">Bento</div>
                                                            </div>
                                                        )}
                                                         {item.icon && !item.image && (
                                                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                                                                <div className="text-red-600 font-black text-xs">{item.icon}</div>
                                                            </div>
                                                         )}
                                                    </div>
                                                    
                                                    <div className="flex-grow min-w-0 pr-12">
                                                        <h4 className="font-bold dark:text-white flex items-center gap-2">
                                                            {item.name || item.title || item.email || 'Site Asset'}
                                                            {item.tag && <span className="text-[9px] px-2 py-0.5 bg-red-600 text-white rounded-full uppercase tracking-tighter">{item.tag}</span>}
                                                            {item.category && <span className="text-[9px] px-2 py-0.5 bg-gray-900 text-white rounded-full uppercase tracking-tighter">{item.category}</span>}
                                                        </h4>
                                                        <p className="text-xs text-gray-500 mt-1 line-clamp-2 italic">{item.description || item.feedback || item.address}</p>
                                                        <div className="flex gap-4 mt-3">
                                                            {item.price && <span className="text-xs font-black text-red-600">{item.price}</span>}
                                                            {item.rating && <span className="text-xs font-bold flex items-center gap-1"><Star size={12} className="fill-yellow-400 text-yellow-400"/> {item.rating}</span>}
                                                            {item.company && <span className="text-xs font-bold text-blue-500">{item.company}</span>}
                                                            {item.author && <span className="text-xs font-bold text-gray-400 flex items-center gap-1"><BookOpen size={12}/> {item.author}</span>}
                                                            {item.phone && <span className="text-xs font-bold text-gray-400 flex items-center gap-1"><Phone size={12}/> {item.phone}</span>}
                                                        </div>
                                                    </div>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button onClick={() => handleEditContent(item)} className="bg-white dark:bg-gray-800 shadow-md text-blue-400 hover:text-blue-600 p-2 rounded-lg transition-all" title="Edit Item"><Settings size={18}/></button>
                                                        <button onClick={() => handleDeleteContent(item._id)} className="bg-white dark:bg-gray-800 shadow-md text-gray-300 hover:text-red-600 p-2 rounded-lg transition-all" title="Delete Item"><Trash2 size={18}/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {activeTab === 'tasks' && tasks.length === 0 && (
                                            <div className="p-20 text-center text-gray-400">No tasks assigned yet.</div>
                                        )}
                                        {activeTab === 'tasks' && tasks.map(t => (
                                            <div key={t._id} className="p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-bold dark:text-white">{t.title}</h4>
                                                        <p className="text-xs text-gray-500 mt-1">Assigned to ID: <span className="font-bold text-gray-900 dark:text-gray-300">{t.assignedTo}</span></p>
                                                        <div className="flex items-center gap-4 mt-3">
                                                            <div className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg ${
                                                                t.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                                            }`}>
                                                                {t.status === 'completed' ? <CheckCircle size={14}/> : <Clock size={14}/>} {t.status}
                                                            </div>
                                                            {t.dueDate && <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1"><AlertCircle size={10}/> Due {new Date(t.dueDate).toLocaleDateString()}</div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Request View Modal */}
            {selectedRequest && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
                            <h3 className="text-xl font-black dark:text-white flex items-center gap-2">
                                <Mail className="text-red-600"/> Request Details
                            </h3>
                            <button onClick={() => setSelectedRequest(null)} className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-600 rounded-full transition-colors">
                                <X size={24}/>
                            </button>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedRequest.title || selectedRequest.subject}</h2>
                                    <div className="flex items-center gap-3">
                                        <span className={`px-3 py-1 rounded-lg text-xs font-black uppercase ${
                                            selectedRequest.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>{selectedRequest.status}</span>
                                        <span className="text-sm text-gray-500 font-medium flex items-center gap-1"><Clock size={14}/> {new Date(selectedRequest.createdAt).toLocaleString()}</span>
                                    </div>
                                </div>
                                {selectedRequest.customer && (
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-gray-900 dark:text-white">{selectedRequest.customer.firstName} {selectedRequest.customer.lastName}</div>
                                        <div className="text-xs text-gray-500">{selectedRequest.customer.email}</div>
                                    </div>
                                )}
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                                <h4 className="text-xs font-black uppercase text-gray-400 mb-2">Description</h4>
                                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">"{selectedRequest.description}"</p>
                            </div>

                            {selectedRequest.response && (
                                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border-l-4 border-green-500">
                                    <h4 className="text-xs font-black uppercase text-green-700 dark:text-green-400 mb-2">Current Response</h4>
                                    <p className="text-gray-900 dark:text-white font-medium">{selectedRequest.response}</p>
                                </div>
                            )}

                            <form onSubmit={handleRespondRequest} className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Send size={16} className="text-blue-500"/> {selectedRequest.response ? 'Update Response' : 'Send Response'}
                                </h4>
                                <textarea 
                                    value={responseNote}
                                    onChange={(e) => setResponseNote(e.target.value)}
                                    placeholder="Type your response to the customer here..."
                                    className="w-full h-32 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 outline-none transition-colors"
                                    required
                                />
                                <div className="flex justify-end gap-3">
                                    <button type="button" onClick={() => setSelectedRequest(null)} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Cancel</button>
                                    <button type="submit" className="px-8 py-3 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 transition-all">
                                        Send Response
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            </div>
        </DashboardLayout>
    );
};

export default ManagerDashboard;
